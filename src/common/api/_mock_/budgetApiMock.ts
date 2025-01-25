import { BudgetResponse } from '_types/budget';
import { mockBudgetList } from './consts';
import { BudgetApi } from '_types/api';
import { TransactionApi } from '_types/api';
import { AxiosResponse } from 'axios';
import { v4 } from 'uuid';
import { TransactionResponse } from '_types/transactions';

export let tempBudgetList: BudgetResponse[] = [...mockBudgetList];

export const budgetApiMock: BudgetApi = {
    getBudgetById: (id: string) => {
        return new Promise<Partial<AxiosResponse<BudgetResponse>>>(
            (resolve) => {
                setTimeout(() => {
                    resolve({
                        data: tempBudgetList.find((budget) => budget.id === id),
                    });
                }, 1000);
            },
        );
    },

    getAllBudgets: () => {
        return new Promise<Partial<AxiosResponse<BudgetResponse[]>>>(
            (resolve) => {
                setTimeout(() => {
                    resolve({ data: tempBudgetList });
                }, 1000);
            },
        );
    },

    postBudget: (newBudget) => {
        const budget: BudgetResponse = {
            ...newBudget,
            id: v4(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        tempBudgetList.push(budget);
        return new Promise<Partial<AxiosResponse<BudgetResponse>>>(
            (resolve) => {
                setTimeout(() => {
                    resolve({ data: budget });
                }, 1000);
            },
        );
    },
};

export const transactionApiMock: TransactionApi = {
    postTransaction: (newTransaction) => {
        const transaction = { ...newTransaction, id: v4() };
        tempBudgetList = tempBudgetList.map((budget) => {
            if (budget.id === newTransaction.budgetId) {
                return {
                    ...budget,
                    transactions: [...(budget.transactions ?? []), transaction],
                };
            }
            return budget;
        });
        return new Promise<Partial<AxiosResponse<TransactionResponse>>>(
            (resolve) => {
                setTimeout(() => {
                    resolve({ data: transaction });
                }, 1000);
            },
        );
    },
};
