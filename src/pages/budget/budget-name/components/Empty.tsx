import { useStyles } from '_components/layouts/main/styles';
import { FC } from 'react';

export const Empty: FC = () => {
    const { styles } = useStyles();

    return (
        <div className={styles.noContent}>
            Здесь будет отоброжаться созданный бюджет с балансом, расходами и
            графиками
        </div>
    );
};
