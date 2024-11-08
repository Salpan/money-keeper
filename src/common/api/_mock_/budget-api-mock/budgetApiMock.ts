import { BudgetResponse } from '_types/budget';
import { mockBudgetList } from './consts';
import { BudgetApi } from '_types/api';
import { AxiosResponse } from 'axios';
import { v4 } from 'uuid';

const tempBudgetList: BudgetResponse[] = [...mockBudgetList];

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
