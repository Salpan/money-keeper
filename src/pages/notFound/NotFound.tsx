import { useStyles } from '_components/layouts/main/styles';
import { FC } from 'react';

export const NotFound: FC = () => {
    const { styles } = useStyles();
    return (
        <div className={styles.startPage}>Извините, страница не найдена</div>
    );
};
