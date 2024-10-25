import { useStyles } from '_components/layouts/main/styles';
import { FC } from 'react';

export const Analytics: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.noContent}>
            Здесь будет красивый график с информацией, какой будет бюджет в
            конце периода
        </div>
    );
};
