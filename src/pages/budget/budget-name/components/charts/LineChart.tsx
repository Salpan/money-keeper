import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useUnit } from 'effector-react';
import { $budget } from '_models/budget';
import { TransactionType } from '_enums/TransactionType';
import { categoriesDictionary } from '_consts/categoriesList';
import { TestCategoriesList } from '_consts/testCategoriesList';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const LineChart: FC = () => {
    const budget = useUnit($budget);

    const data = {
        labels: budget?.transactions
            ?.filter((i) => i.transaction === TransactionType.Expens)
            .map(
                (transaction) =>
                    categoriesDictionary[transaction.categories]?.name,
            ),
        datasets: [
            {
                label: ' рублей',
                data: budget?.transactions
                    ?.filter((i) => i.transaction === TransactionType.Expens)
                    .map((i) => i.amount),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 4,
            },
            {
                label: ' рублей',
                data: budget?.transactions
                    ?.filter((i) => i.transaction === TransactionType.Income)
                    .map((i) => i.amount),
                backgroundColor: TestCategoriesList.map(
                    (i) => i.backgroundColor,
                ),
                borderColor: TestCategoriesList.map((i) => i.borderColor),
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
                display: true,
                text: 'Test categories',
                position: 'top' as const,
                padding: 1,
            },
        },
    };

    return <Line data={data} options={options} />;
};
