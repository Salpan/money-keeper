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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const LineChart: FC = () => {
    const budget = useUnit($budget);

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Расходы',
                data: budget?.transactions
                    ?.filter((i) => i.transaction === TransactionType.Expens)
                    .map((i) => i.amount),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 4,
            },
            {
                label: 'Доходы',
                data: budget?.transactions
                    ?.filter((i) => i.transaction === TransactionType.Income)
                    .map((i) => i.amount),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'center' as const,
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

    return <Line data={data} options={options} />;
};
