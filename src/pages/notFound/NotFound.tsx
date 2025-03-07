import { useStyles } from '_components/layouts/main/styles';
import { Button } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound: FC = () => {
    const { styles } = useStyles();

    const navigate = useNavigate();

    const budgetCreateButton = () => {
        navigate('/budget/create');
    };

    const budgetListButton = () => {
        navigate('/budget/list');
    };

    return (
        <div className={styles.startPage}>
            <div>Извините, страница не найдена</div>
            <div>
                <Button onClick={budgetCreateButton}>
                    Создать новый бюджет
                </Button>{' '}
                <Button onClick={budgetListButton}>Выбрать из списка</Button>
            </div>
        </div>
    );
};
