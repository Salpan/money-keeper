import { useStyles } from '_components/layouts/main/styles';
import { FC, useEffect } from 'react';
import { $budget, getBudgetByIdFx, getBudgetEv } from '../../../models/budget';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { Flex, List, Typography } from 'antd';
import { TestCategoriesList } from '_consts/testCategoriesList';
import { BudgetResponse } from '_types/budget';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';
import { categoriesDictionary } from '_consts/categoriesList';
import { Transaction } from './components/Transaction';
import { TransactionType } from '_enums/TransactionType';
import { transactionConverter } from '../../../common/converters/transactionConverter';
import { GroupDivider } from './components/GroupDivider';

ChartJS.register(ArcElement, Tooltip, Legend);

const calculateTransactions = (
    transactions: BudgetResponse['transactions'],
    type: 'income' | 'expense',
) => {
    const result = transactions?.reduce((acc, trans) => {
        if (trans.transaction === type) {
            return acc + trans.amount;
        }
        return acc;
    }, 0);
    console.log({ result });
    return result;
};

export const BudgetName: FC = () => {
    const budget = useUnit($budget);

    console.log(budget?.transactions);

    console.log(budget?.startBudget, 'start budget');

    const balance =
        budget?.transactions?.reduce((acc, transaction) => {
            if (transaction.transaction === 'income')
                return acc + transaction.amount;
            return acc - transaction.amount;
        }, budget?.startBudget ?? 0) ??
        budget?.startBudget ??
        0;

    console.log({ balance });

    const pieData = {
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

    const pieConfig = {
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

    const { styles } = useStyles();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getBudgetEv(id);
        }
    }, [id]);

    const isPending = useUnit(getBudgetByIdFx.pending);

    // if (isPending) return <Skelet />;

    console.log(budget?.transactions);

    return (
        <div className={styles.budgetConteiner}>
            <Flex justify="space-between" style={{ padding: '0 45px' }}>
                <Typography.Title level={3}>
                    {budget?.name ?? `Бюджет`}
                </Typography.Title>
                <Typography.Title level={4}>
                    Период:{' '}
                    {`${dayjs(budget?.period[0]).format(`DD.MM.YYYY`)} - ${dayjs(budget?.period[1]).format(`DD.MM.YYYY`)}`}
                </Typography.Title>
            </Flex>
            <div className={styles.budgetBalance}>
                <div>
                    <Typography.Title level={4}>
                        Начальный капитал:
                    </Typography.Title>
                    <p className={styles.numberText}>
                        {budget?.startBudget ?? 0} USD
                    </p>
                </div>
                <div>
                    <Typography.Title level={4}>Баланс: </Typography.Title>
                    <p className={styles.numberText}>{Number(balance)} USD</p>
                </div>
                <div>
                    <Typography.Title level={4}>Доходы:</Typography.Title>
                    <p className={styles.numberText}>
                        {budget?.transactions
                            ? calculateTransactions(
                                  budget?.transactions,
                                  'income',
                              )
                            : 0}{' '}
                        USD
                    </p>
                </div>
                <div>
                    <Typography.Title level={4}>Расходы:</Typography.Title>
                    <p className={styles.numberText}>
                        {budget?.transactions
                            ? calculateTransactions(
                                  budget?.transactions,
                                  'expense',
                              )
                            : 0}{' '}
                        USD
                    </p>
                </div>
            </div>
            <div className={styles.budgetMain}>
                <div style={{ width: '600px', height: '100%' }}>
                    <Pie data={pieData} options={pieConfig} />
                </div>
                <div>
                    <List
                        size="large"
                        header={
                            <Typography.Title level={5}>
                                Последние транзакции
                            </Typography.Title>
                        }
                        bordered
                        style={{
                            width: '500px',
                            height: '600px',
                            overflowY: 'scroll',
                        }}
                        dataSource={transactionConverter(budget?.transactions)}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        renderItem={(i: any) => {
                            if (typeof i === 'string')
                                return <GroupDivider date={i} />;
                            return (
                                <Transaction
                                    title={i.categories}
                                    description={i.description}
                                    value={i.amount}
                                    type={i.transaction}
                                    loading={isPending}
                                />
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
