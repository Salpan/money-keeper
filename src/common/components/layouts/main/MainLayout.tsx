import { FC, PropsWithChildren } from 'react';

import { useStyles } from './styles';
import { Menu, type MenuProps, Typography } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    const { styles } = useStyles();

    const handleMenu: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    const items: MenuItem[] = [
        {
            key: 'categories',
            label: 'Categories',
            children: [
                {
                    key: 'markets',
                    label: 'Markets',
                },
                {
                    key: 'child',
                    label: 'Child',
                },
            ],
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
                        style={{ borderRadius: '8px' }}
                    />
                </section>
                <section className={styles.content}>
                    {children ?? (
                        <Typography.Text
                            type="secondary"
                            className={styles.noContent}
                        >
                            No content
                        </Typography.Text>
                    )}
                </section>
            </main>
            <footer className={styles.footer}>Salpan Inc. 2024</footer>
        </div>
    );
};