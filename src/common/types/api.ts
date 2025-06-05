import { AxiosResponse } from 'axios';
import { BudgetRequest, BudgetResponse } from './budget';
import { TransactionRequest, TransactionResponse } from './transactions';

export type BudgetApi = {
    getBudgetById: (
        id: string,
    ) => Promise<Partial<AxiosResponse<BudgetResponse>>>;
    getAllBudgets: () => Promise<Partial<AxiosResponse<BudgetResponse[]>>>;
    postBudget: (
        newBudget: BudgetRequest,
    ) => Promise<Partial<AxiosResponse<BudgetResponse>>>;
};

export type TransactionApi = {
    postTransaction: (
        transaction: TransactionRequest,
    ) => Promise<Partial<AxiosResponse<TransactionResponse>>>;
};
