import { useStyles } from '_components/layouts/main/styles';
import { FC, useEffect } from 'react';
import { $budget, getBudgetByIdFx, getBudgetEv } from '../../../models/budget';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { Empty } from './components/Empty';
import { Skeleton } from './components/Skeleton';
import { Typography } from 'antd';

export const BudgetName: FC = () => {
    const balance = 5000;
    const income = 2000;
    const expenses = 1500;

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
        <div className={styles.container}>
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
    );
};
