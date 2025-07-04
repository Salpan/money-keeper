import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { useUnit } from 'effector-react';
import { $budget } from '_models/budget';
import { TransactionType } from '_enums/TransactionType';
import { categoriesDictionary, categoriesList } from '_consts/categoriesList';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const PieChart: FC = () => {
    const budget = useUnit($budget);

    const data = {
        labels: budget?.transactions
            ?.filter((i) => i.transaction === TransactionType.Expense)
            .map(
                (transaction) =>
                    categoriesDictionary[transaction.categories]?.name,
            ),
        datasets: [
            {
                label: ' рублей',
                data: budget?.transactions
                    ?.filter((i) => i.transaction === TransactionType.Expense)
                    .map((i) => i.amount),
                backgroundColor: categoriesList.map((i) => i.backgroundColor),
                borderColor: categoriesList.map((i) => i.borderColor),
                borderWidth: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'start' as const,
                labels: {
                    padding: 15,
                    usePointStyle: true,
                },
            },
            title: {
                display: false,
                text: 'Test categories',
                position: 'top' as const,
                padding: 1,
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};
