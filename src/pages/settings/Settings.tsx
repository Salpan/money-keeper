import { FC } from 'react';
import { useStyles } from '../../common/components/layouts/main/styles';

export const Settings: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.noContent}>Здесь будет настройка аккаунта</div>
    );
};
