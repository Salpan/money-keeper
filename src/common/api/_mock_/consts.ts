import { BudgetResponse } from '_types/budget';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export const mockBudgetList: BudgetResponse[] = Array.from(
    { length: 5 },
    () => ({
        id: uuidv4(),
        name: faker.finance.transactionType(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        period: '2024-01-01 - 2025-01-01',
        startBudget: faker.number.int({ min: 1000, max: 23000 }),
        endBudget: faker.number.int({ min: 1000, max: 23000 }),
    }),
);
