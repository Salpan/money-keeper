import { AxiosResponse } from 'axios';
import { BudgetRequest, BudgetResponse } from './budget';

export type BudgetApi = {
    getBudgetById: (
        id: string,
    ) => Promise<Partial<AxiosResponse<BudgetResponse>>>;
    getAllBudgets: () => Promise<Partial<AxiosResponse<BudgetResponse[]>>>;
    postBudget: (
        newBudget: BudgetRequest,
    ) => Promise<Partial<AxiosResponse<BudgetResponse>>>;
};
