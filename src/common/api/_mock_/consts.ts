import { BudgetResponse } from '_types/budget';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { categoriesList } from '_consts/categoriesList';
import { TransactionType } from '_enums/TransactionType';

export const mockBudgetList: BudgetResponse[] = Array.from(
    { length: 4 },
    () => ({
        id: uuidv4(),
        name: faker.finance.transactionType(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        period: '2024/01/01 - 2025/01/01',
        startBudget: faker.number.int({ min: 1000, max: 23000 }),
        endBudget: faker.number.int({ min: 1000, max: 23000 }),
        transactions: [
            {
                id: uuidv4(),
                transaction: TransactionType.Expense,
                categories:
                    categoriesList[
                        Math.floor(Math.random() * categoriesList.length)
                    ].value,
                description: faker.lorem.sentence(),
                amount: faker.number.int({ min: 500, max: 2500 }),
                date: faker.date.past().toISOString(),
            },
            {
                id: uuidv4(),
                transaction: TransactionType.Income,
                categories:
                    categoriesList[
                        Math.floor(Math.random() * categoriesList.length)
                    ].value,
                // description: faker.lorem.sentence(),
                amount: faker.number.int({ min: 500, max: 2500 }),
                date: faker.date.past().toISOString(),
            },
            {
                id: uuidv4(),
                transaction: TransactionType.Expense,
                categories:
                    categoriesList[
                        Math.floor(Math.random() * categoriesList.length)
                    ].value,
                description: faker.lorem.sentence(),
                amount: faker.number.int({ min: 500, max: 2500 }),
                date: faker.date.past().toISOString(),
            },
            {
                id: uuidv4(),
                transaction: TransactionType.Expense,
                categories:
                    categoriesList[
                        Math.floor(Math.random() * categoriesList.length)
                    ].value,
                description: faker.lorem.sentence(),
                amount: faker.number.int({ min: 500, max: 2500 }),
                date: faker.date.past().toISOString(),
            },
        ],
    }),
);
