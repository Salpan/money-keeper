export type Categories = {
    value: string;
    name: string;
    backgroundColor?: string;
    borderColor?: string;
};

export const categoriesList: Categories[] = [
    {
        value: `transfer btw persons`,
        name: `Переводы людям`,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `supermarkets`,
        name: `Супермаркеты`,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `car`,
        name: `Автомобиль`,
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `housing and communal services`,
        name: `ЖКХ`,
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `communication and internet`,
        name: `Связь и интернет`,
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `cafes and restaurants`,
        name: `Кафе и рестораны`,
        backgroundColor: 'rgba(255, 0, 255, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `loan repayment`,
        name: `Погашение кредитов`,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `marketplace`,
        name: `Маркетплейсы`,
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `gas station`,
        name: `АЗС`,
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `household goods`,
        name: `Товары для дома`,
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `clothes and shoes`,
        name: `Одежда и обувь`,
        backgroundColor: 'rgba(128, 128, 0, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `electronics and home appliances`,
        name: `Электроника и бытовая техника`,
        backgroundColor: 'rgba(0, 128, 128, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `pharmacies`,
        name: `Аптеки`,
        backgroundColor: 'rgba(139, 69, 19, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `taxi`,
        name: `Такси`,
        backgroundColor: 'rgba(255, 192, 203, 0.2)',
        borderColor: 'rgb(255, 255, 255)',
    },
    {
        value: `cash`,
        name: `Наличные`,
    },
    {
        value: `transfer`,
        name: `Перевод`,
    },
];

export const categoriesDictionary = categoriesList.reduce<
    Record<string, Categories>
>((acc, { name, value }) => {
    acc[value] = { name, value };
    return acc;
}, {});
