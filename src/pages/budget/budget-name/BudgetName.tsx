import { useStyles } from '_components/layouts/main/styles';
import { FC, useEffect, useState } from 'react';
import { $budget, getBudgetByIdFx, getBudgetEv } from '../../../models/budget';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { Empty } from './components/Empty';
import { Skeleton } from './components/Skeleton';
import { List, Typography } from 'antd';
import { Pie } from '@ant-design/charts';
import { TestCategoriesList } from '_consts/testCategoriesList';
import { transaction } from '_consts/transaction';

export const BudgetName: FC = () => {
    const balance = 5000;
    const income = 2000;
    const expenses = 1500;

    const [data, setData] = useState([{}]);

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
            text: 'value', // не могу поменять значение при наведении
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

    const budget = useUnit($budget);

    const isPending = useUnit(getBudgetByIdFx.pending);

    useEffect(() => {
        if (id) {
            getBudgetEv(id);
        }
    }, [id]);

    if (isPending) return <Skeleton />;

    if (!budget) return <Empty />;

    return (
        <div className={styles.budgetConteiner}>
            <div className={styles.budgetBalance}>
                <div>
                    <Typography.Title level={4}>Баланс: </Typography.Title>
                    <p>{balance} USD</p>
                </div>
                <div>
                    <Typography.Title level={4}>Доходы:</Typography.Title>
                    <p>{income} USD</p>
                </div>
                <div>
                    <Typography.Title level={4}>Расходы:</Typography.Title>
                    <p>{expenses} USD</p>
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
                        dataSource={[1]} // не пойму взаимосвязь, может с помощью неё можно обойтись без map()
                        renderItem={() =>
                            transaction.map((i) => {
                                return (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={i.title}
                                            description={i.description}
                                        />
                                        <div>{i.balance}</div>
                                    </List.Item>
                                );
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};
