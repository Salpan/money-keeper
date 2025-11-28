import { useStyles } from '_components/layouts/main/styles';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { Button, Flex, List, Typography } from 'antd';
import { BudgetResponse } from '_types/budget';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';
import { Transaction } from './components/Transaction';
import { GroupDivider } from './components/GroupDivider';
import { PieChart } from './components/charts/PieChart';
import { LineChart } from './components/charts/LineChart';
import { RenderTransaction } from '_types/transactions';
import { transactionConverter } from '_converters/transactionConverter';
import {
    $budget,
    $budgetList,
    getBudgetByIdFx,
    getBudgetEv,
} from '_models/budget';

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
    return result;
};

export const BudgetName: FC = () => {
    const navigate = useNavigate();

    const budgetList = useUnit($budgetList);

    const budget = useUnit($budget);

    const balance =
        budget?.transactions?.reduce((acc, transaction) => {
            if (transaction.transaction === 'income')
                return acc + transaction.amount;
            return acc - transaction.amount;
        }, budget?.startBudget ?? 0) ??
        budget?.startBudget ??
        0;

    const { styles } = useStyles();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getBudgetEv(id);
        }
    }, [id]);

    const isPending = useUnit(getBudgetByIdFx.pending);

    const budgetId = budgetList.find((budget) => budget.id === id);

    if (!budgetId) {
        navigate(`/budget/${id}/404`);
    }

    const [activeChart, setActiveChart] = useState('Pie');

    const renderChart = () => {
        if (activeChart === 'Pie') {
            return <PieChart />;
        }
        return <LineChart />;
    };

    return (
        <div className={styles.budgetConteiner}>
            <Flex justify="space-between" style={{ padding: '0 45px' }}>
                <Typography.Title level={3}>
                    {budget?.name ?? `Бюджет`}
                </Typography.Title>
                <Typography.Title level={4}>
                    Период:{' '}
                    {`${dayjs(budget?.period[1]).format(`DD.MM.YYYY`)} - ${dayjs(budget?.period[0]).format(`DD.MM.YYYY`)}`}
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
                <div>
                    <div className={styles.chartsBtnContainer}>
                        <Button
                            className={styles.chartsButton}
                            onClick={() => setActiveChart('Pie')}
                        >
                            Рассходы
                        </Button>
                        <Button
                            className={styles.chartsButton}
                            onClick={() => setActiveChart('Line')}
                        >
                            Рассходы и доходы
                        </Button>
                    </div>
                    <div className={styles.budgetPieChart}>{renderChart()}</div>
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
                        renderItem={(i: RenderTransaction) => {
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
