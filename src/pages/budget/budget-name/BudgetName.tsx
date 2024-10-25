import { useStyles } from '_components/layouts/main/styles';
import { FC, useEffect } from 'react';
import { $budget, getBudgetByIdFx, getBudgetEv } from '../../../models/budget';
import { useParams } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { Empty } from './components/Empty';
import { Skeleton } from './components/Skeleton';

export const BudgetName: FC = () => {
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

    return <div className={styles.noContent}>{JSON.stringify(budget)}</div>;
};
