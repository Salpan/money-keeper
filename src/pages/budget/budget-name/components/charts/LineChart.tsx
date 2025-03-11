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
import { transactionConverter } from '_converters/transactionConverter';
import dayjs from 'dayjs';
import { Transaction } from '_types/transactions';

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
    { month: 'January', amount: 0 },
    { month: 'February', amount: 0 },
    { month: 'March', amount: 0 },
    { month: 'April', amount: 0 },
    { month: 'May', amount: 0 },
    { month: 'June', amount: 0 },
    { month: 'July', amount: 0 },
    { month: 'August', amount: 0 },
    { month: 'September', amount: 0 },
    { month: 'October', amount: 0 },
    { month: 'November', amount: 0 },
    { month: 'December', amount: 0 },
];

export const LineChart: FC = () => {
    const budget = useUnit($budget);

    const sortedDate = transactionConverter(budget?.transactions)
        .filter((i: string | Transaction) => typeof i === 'string')
        .map((i: string) => dayjs(i).format('DD MMMM YYYY'));

    console.log('DATE', sortedDate);

    const newArray = budget?.transactions?.map(({ date, amount }) => ({
        date: dayjs(date).format('MMMM'),
        amount,
    }));

    const updatedMonths = months.map((month) => {
        if (newArray) {
            const totalAmount = newArray
                .filter((newArray) => newArray.date === month.month)
                .reduce((sum, trans) => sum + trans.amount, 0);
            return { ...month, amount: totalAmount };
        } else {
            return { ...month, amount: 0 };
        }
    });

    const data = {
        labels: months.map((month) => month.month),
        datasets: [
            {
                label: 'Расходы',
                data: updatedMonths.map((i) => i.amount),
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
                text: 'Расходы и доходы',
                position: 'top' as const,
                padding: 1,
            },
        },
    };

    return <Line data={data} options={options} />;
};
