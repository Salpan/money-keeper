export type Categories = {
    value: string;
    name: string;
};

// 14 элементов нужно добавить разные цвета для диаграммы

export const categoriesList: Categories[] = [
    {
        value: 'transfer',
        name: 'Переводы людям',
    },
    {
        value: 'supermarkets',
        name: 'Супермаркеты',
    },
    {
        value: 'car',
        name: 'Автомобиль',
    },
    {
        value: 'housing and communal services',
        name: 'ЖКХ',
    },
    {
        value: 'communication and internet',
        name: 'Связь и интернет',
    },
    {
        value: 'cafes and restaurants',
        name: 'Кафе и рестораны',
    },
    {
        value: 'loan repayment',
        name: 'Погашение кредитов',
    },
    {
        value: 'marketplace',
        name: 'Маркетплейсы',
    },
    {
        value: 'gas station',
        name: 'АЗС',
    },
    {
        value: 'household goods',
        name: 'Товары для дома',
    },
    {
        value: 'clothes and shoes',
        name: 'Одежда и обувь',
    },
    {
        value: 'electronics and home appliances',
        name: 'Электроника и бытовая техника',
    },
    {
        value: 'pharmacies',
        name: 'Аптеки',
    },
    {
        value: 'taxi',
        name: 'Такси',
    },
];
