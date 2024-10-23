import { FC } from 'react';
import { useStyles } from '../../common/components/layouts/main/styles';

export const Analytics: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.noContent}>
            Здесь будет красивый график с информацией, какой будет бюджет в
            конце периода
        </div>
    );
};
