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
import dayjs from 'dayjs';
import { monthsData } from '_consts/monthsData';

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

    const transactions = budget?.transactions?.map(
        ({ date, amount, transaction }) => ({
            date: dayjs(date).format('MMMM'),
            amount,
            transaction,
        }),
    );

    const amountDataExpense = monthsData
        .map((month) => {
            if (transactions) {
                const totalAmount = transactions
                    .filter(
                        (trans) =>
                            trans.transaction === TransactionType.Expense,
                    )
                    .filter((trans) => trans.date === month.month)
                    .reduce((acc, trans) => {
                        return acc + trans.amount;
                    }, 0);
                return { ...month, amount: totalAmount };
            } else {
                return { ...month, amount: 0 };
            }
        })
        .map((month) => month.amount);

    const amountDataIncomes = monthsData
        .map((month) => {
            if (transactions) {
                const totalAmount = transactions
                    .filter(
                        (trans) => trans.transaction === TransactionType.Income,
                    )
                    .filter((trans) => trans.date === month.month)
                    .reduce((acc, trans) => {
                        return acc + trans.amount;
                    }, 0);
                return { ...month, amount: totalAmount };
            } else {
                return { ...month, amount: 0 };
            }
        })
        .map((month) => month.amount);

    const data = {
        labels: monthsData.map((month) => month.month),
        datasets: [
            {
                label: 'Расходы',
                data: amountDataExpense,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 4,
            },
            {
                label: 'Доходы',
                data: amountDataIncomes,
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
