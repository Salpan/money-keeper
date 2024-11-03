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
};

export type BudgetResponse = BudgetDefaultDTO & Omit<BudgetRequest, 'name'>;
