import { useStyles } from '_components/layouts/main/styles';
import { FC } from 'react';
import { List, Skeleton, Typography } from 'antd';

export const Skelet: FC = () => {
    const { styles } = useStyles();

    return (
        <div className={styles.budgetConteiner}>
            <div className={styles.budgetBalance}>
                <div>
                    <Typography.Title level={4}>Баланс: </Typography.Title>
                    <p>{<Skeleton.Input size="small" active />} USD</p>
                </div>
                <div>
                    <Typography.Title level={4}>Доходы:</Typography.Title>
                    <p>{<Skeleton.Input size="small" active />} USD</p>
                </div>
                <div>
                    <Typography.Title level={4}>Расходы:</Typography.Title>
                    <p>{<Skeleton.Input size="small" active />} USD</p>
                </div>
            </div>
            <div className={styles.budgetMain}>
                <div>
                    <Skeleton.Image active />
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
                        style={{ width: '500px' }}
                        dataSource={[1]}
                        renderItem={() => <Skeleton active />}
                    />
                </div>
            </div>
        </div>
    );
};
