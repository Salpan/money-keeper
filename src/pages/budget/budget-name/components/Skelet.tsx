import { useStyles } from '_components/layouts/main/styles';
import { FC } from 'react';
import { Flex, List, Skeleton, Typography } from 'antd';

export const Skelet: FC = () => {
    const { styles } = useStyles();

    return (
        <div className={styles.budgetConteiner}>
            <Flex
                justify="space-between"
                style={{ paddingRight: 45, paddingLeft: 45 }}
            >
                <Typography.Title level={3}>Бюджет</Typography.Title>
                <Typography.Title level={4}>
                    Период: {<Skeleton.Input size="small" active />}
                </Typography.Title>
            </Flex>
            <div className={styles.budgetBalance}>
                <div>
                    <Typography.Title level={4}>
                        Начальный капитал:
                    </Typography.Title>
                    <p>
                        {
                            <Skeleton.Input
                                // style={{ width: '15px' }}
                                size="small"
                                active
                            />
                        }
                    </p>
                </div>
                <div>
                    <Typography.Title level={4}>Баланс: </Typography.Title>
                    <p>{<Skeleton.Input size="small" active />}</p>
                </div>
                <div>
                    <Typography.Title level={4}>Доходы:</Typography.Title>
                    <p>{<Skeleton.Input size="small" active />}</p>
                </div>
                <div>
                    <Typography.Title level={4}>Расходы:</Typography.Title>
                    <p>{<Skeleton.Input size="small" active />}</p>
                </div>
            </div>
            <div className={styles.budgetMain}>
                <div>
                    <Skeleton.Image
                        style={{ width: '600px', height: '600px' }}
                        active
                    />
                </div>
                <div>
                    <List
                        size="large"
                        header={
                            <Typography.Title level={5}>
                                Последние транзакции
                            </Typography.Title>
                        }
                        bordered
                        style={{ width: '500px', height: '400px' }}
                        dataSource={[1]}
                        renderItem={() => <Skeleton active />}
                    />
                </div>
            </div>
        </div>
    );
};
