import { FC } from 'react';
import { useStyles } from '../../../common/components/layouts/main/styles';

export const BudgetName: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.noContent}>
            Здесь будет отоброжаться созданный бюджет с балансом, расходами и
            графиками
        </div>
    );
};
