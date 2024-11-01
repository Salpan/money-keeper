type Transaction = {
    title: string;
    description: string;
    balance: number;
};

export const transaction: Transaction[] = [
    {
        title: 'Еда',
        description: 'Не вкусно поел в KFC',
        balance: 1500,
    },
    {
        title: 'ЖКХ',
        description: 'Заплатил за воду и свет',
        balance: 4200,
    },
];
