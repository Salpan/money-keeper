type Categories = {
    value: number;
    type: string;
    backgroundColor: string;
    borderColor: string;
};

export const TestCategoriesList: Categories[] = [
    {
        value: 123,
        type: 'Переводы людям',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
        value: 121,
        type: 'Супермаркеты',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
        value: 30,
        type: 'Автомобиль',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
    },
    {
        value: 39,
        type: 'ЖКХ',
        backgroundColor: 'rgba(75, 192,192, 0.2)',
        borderColor: 'rgba(75, 192,192, 1)',
    },
    {
        value: 12,
        type: 'Связь и интернет',
        backgroundColor: 'rgba(153, 102,255, 0.2)',
        borderColor: 'rgba(153, 102,255, 1)',
    },
];
