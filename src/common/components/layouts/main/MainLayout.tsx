import { FC, useEffect } from 'react';
import { Menu, type MenuProps, Typography } from 'antd';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useStyles } from './styles';
import { useUnit } from 'effector-react';
import { $budget, $budgetList, getAllBudgetsEv } from '_models/budget';
import { setNavigateEv } from '_models/navigation';

type MenuItem = Required<MenuProps>['items'][number];

export const MainLayout: FC = () => {
    const { styles } = useStyles();
    const navigate = useNavigate();

    const budget = useUnit($budget);

    const budgetList = useUnit($budgetList);

    useEffect(() => {
        getAllBudgetsEv();
    }, []);

    useEffect(() => {
        setNavigateEv(navigate);
    }, [navigate]);

    const budgetMenuItems = budgetList.map(({ id, name }) => ({
        key: id,
        label: name,
    }));

    const handleMenu: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        const path = e.keyPath.reverse().join('/');
        navigate(path);
    };

    const items: MenuItem[] = [
        {
            key: 'budget',
            label: 'Бюджеты',
            children: [
                ...budgetMenuItems,
                {
                    key: 'create',
                    label: 'Создать бюджет',
                },
            ],
        },
        {
            key: 'transactions',
            label: 'Транзакции',
            children: [
                {
                    key: 'expense',
                    label: 'Расходы',
                },
                {
                    key: 'incomes',
                    label: 'Пополнение',
                },
            ],
        },
        {
            key: 'analytics',
            label: 'Аналитика',
        },
        {
            key: 'settings',
            label: 'Настройки',
        },
    ];

    const { id } = useParams();

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Typography.Title level={4}>Money Keeper</Typography.Title>
            </header>
            <main className={styles.main}>
                <section>
                    <Menu
                        defaultSelectedKeys={
                            budget?.id ? [budget.id, 'budget'] : undefined
                        }
                        defaultOpenKeys={['budget']}
                        selectedKeys={id ? [id] : undefined}
                        onClick={handleMenu}
                        mode="inline"
                        items={items}
                        style={{ borderRadius: '8px', width: '200px' }}
                    />
                </section>
                <section className={styles.content}>
                    <Outlet />
                </section>
            </main>
            <footer className={styles.footer}>Salpan Inc. 2024</footer>
        </div>
    );
};
