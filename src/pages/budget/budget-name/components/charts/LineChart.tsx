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
    scales,
} from 'chart.js';
import { useUnit } from 'effector-react';
import { $budget } from '_models/budget';
import dayjs from 'dayjs';
import { monthsData } from '_consts/monthsData';
import { TransactionType } from '_enums/TransactionType';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
);

export const LineChart: FC = () => {
    const budget = useUnit($budget);

    const transactions = budget?.transactions?.map(
        ({ date, amount, transaction }) => ({
            date: dayjs(date).format('MMMM'),
            amount,
            transaction,
        }),
    );

    const amountDataExpense = monthsData.map((month) => {
        if (transactions) {
            return transactions
                .filter(
                    (trans) =>
                        trans.transaction === TransactionType.Expense &&
                        trans.date === month.month,
                )
                .reduce((acc, trans) => acc + trans.amount, 0);
        }
        return 0;
    });

    const amountDataIncomes = monthsData.map((month) => {
        if (transactions) {
            return transactions
                .filter(
                    (trans) =>
                        trans.transaction === TransactionType.Income &&
                        trans.date === month.month,
                )
                .reduce((acc, trans) => acc + trans.amount, 0);
        }
        return 0;
    });

    const data = {
        labels: monthsData.map((month) => month.month),
        datasets: [
            {
                label: 'Расходы',
                data: amountDataExpense,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 2.5,
                tension: 0.4,
            },
            {
                label: 'Доходы',
                data: amountDataIncomes,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2.5,
                tension: 0.4,
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
