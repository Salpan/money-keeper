import { BudgetResponse } from '_types/budget';

export const budgetApiMock = {
    getBudgetById: (id: string): Promise<BudgetResponse> => {
        return new Promise<BudgetResponse>((resolve) => {
            setTimeout(() => {
                resolve({
                    id,
                    name: 'Test of Budget',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    period: '2024-01-01 - 2025-01-01',
                    startBudget: 1000,
                    endBudget: 25000,
                });
            }, 1000);
        });
    },
};
