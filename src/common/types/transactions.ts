export type ExpenseField = {
    id: string;
    transaction: 'income' | 'expense';
    categories: string;
    description?: string;
    amount: number;
    date: string;
};

export type IncomeField = Omit<ExpenseField, 'description'>;

export type Transaction = ExpenseField | IncomeField;
