import { useStyles } from '_components/layouts/main/styles';
import { FC } from 'react';

export const Settings: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.noContent}>Здесь будет настройка аккаунта</div>
    );
};
