import { ExpenseField } from './transactions';

export type BudgetDefaultDTO = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
};

export type BudgetRequest = {
    name: string;
    period: string;
    startBudget?: number;
    endBudget?: number;
    transactions?: ExpenseField[];
};

export type BudgetResponse = BudgetDefaultDTO & Omit<BudgetRequest, 'name'>;
