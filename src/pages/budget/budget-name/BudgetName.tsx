import { useStyles } from '_components/layouts/main/styles';
import { FC, useEffect, useState } from 'react';
import { $budget, getBudgetByIdFx, getBudgetEv } from '../../../models/budget';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { List, Typography } from 'antd';
import { Pie } from '@ant-design/charts';
import { TestCategoriesList } from '_consts/testCategoriesList';
import { Skelet } from './components/Skelet';
import { BudgetResponse } from '_types/budget';

const calculateTransactions = (
    transactions: BudgetResponse['transactions'],
    type: 'income' | 'expense',
) => {
    return transactions?.reduce((acc, trans) => {
        return acc + (trans.transaction === type ? trans.amount : 0);
    }, 0);
};

export const BudgetName: FC = () => {
    const budget = useUnit($budget);

    console.log(budget?.transactions);

    const balance =
        budget?.transactions?.reduce((acc, transaction) => {
            if (transaction.transaction === 'income')
                return acc + transaction.amount;
            return acc - transaction.amount;
        }, budget?.startBudget ?? 0) ?? 0;

    console.log({ balance });

    // const summIncomes = 2000;

    const [data, setData] = useState<{ type: string; value: number }[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setData(
                TestCategoriesList.map((i) => {
                    return {
                        type: i.name,
                        value: i.value,
                    };
                }),
            );
        }, 1000);
    }, []);

    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        lable: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'left',
                rowPadding: 5,
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

    if (isPending) return <Skelet />;

    console.log(budget?.transactions);

    return (
        <div className={styles.budgetConteiner}>
            <Typography.Title level={3}>{budget?.name}</Typography.Title>
            <div className={styles.budgetBalance}>
                <div>
                    <Typography.Title level={4}>Баланс: </Typography.Title>
                    <p>{Number(balance)} USD</p>
                </div>
                <div>
                    <Typography.Title level={4}>Доходы:</Typography.Title>
                    <p>
                        {calculateTransactions(budget?.transactions, 'income')}{' '}
                        USD
                    </p>
                </div>
                <div>
                    <Typography.Title level={4}>Расходы:</Typography.Title>
                    <p>
                        {calculateTransactions(budget?.transactions, 'expense')}{' '}
                        USD
                    </p>
                </div>
            </div>
            <div className={styles.budgetMain}>
                <div>
                    <Pie {...config} />
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
                        style={{ width: '500px' }}
                        dataSource={budget?.transactions}
                        renderItem={(i) =>
                            i.transaction === 'income' ? (
                                <List.Item>
                                    <List.Item.Meta
                                        title={i.categories}
                                        description={i.description}
                                    />
                                    <div>+ {i.amount}</div>
                                </List.Item>
                            ) : (
                                <List.Item>
                                    <List.Item.Meta
                                        title={i.categories}
                                        description={i.description}
                                    />
                                    <div>- {i.amount}</div>
                                </List.Item>
                            )
                        }
                    />
                </div>
            </div>
        </div>
    );
};
