import { TransactionType } from '_enums/TransactionType';
import { BudgetDefaultDTO } from './budget';

export type ExpenseField = {
    id: string;
    transaction: TransactionType;
    categories: string;
    description?: string;
    amount: number;
    date: string;
};

export type RenderTransaction = {
    categories: string;
    description: string;
    amount: number;
    transaction: TransactionType;
};

export type IncomeField = Omit<ExpenseField, 'description'>;

export type Transaction = ExpenseField | IncomeField;

export type TransactionRequest = {
    budgetId: BudgetDefaultDTO['id'];
} & TransactionForm;

export type TransactionResponse = {
    budgetId?: BudgetDefaultDTO['id'];
} & Transaction;

export type TransactionForm = Omit<Transaction, 'id'>;
