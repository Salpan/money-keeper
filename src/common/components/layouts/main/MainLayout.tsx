import { FC } from 'react';
import { Menu, type MenuProps, Typography } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

type MenuItem = Required<MenuProps>['items'][number];

export const MainLayout: FC = () => {
    const { styles } = useStyles();
    const navigate = useNavigate();

    const handleMenu: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        const path = e.keyPath.reverse().join('/');
        navigate(path);
    };

    const items: MenuItem[] = [
        {
            key: 'budget',
            label: 'Бюджет',
            children: [
                {
                    key: 'budgetName',
                    label: 'Budget1',
                },
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

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Typography.Title level={4}>Money Keeper</Typography.Title>
            </header>
            <main className={styles.main}>
                <section>
                    <Menu
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
