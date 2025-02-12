import { FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { useUnit } from 'effector-react';
import { $budget } from '_models/budget';
import { TransactionType } from '_enums/TransactionType';
import { categoriesDictionary } from '_consts/categoriesList';
import { TestCategoriesList } from '_consts/testCategoriesList';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const PieChart: FC = () => {
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
                display: false,
                text: 'Test categories',
                position: 'top' as const,
                padding: 1,
            },
        },
    };

    return <Pie data={data} options={options} />;
};
