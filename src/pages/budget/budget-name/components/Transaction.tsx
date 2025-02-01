import { TransactionType } from '_enums/TransactionType';
import { List, Skeleton } from 'antd';
import { FC } from 'react';

type TransactionProps = {
    title: string;
    value: number;
    type: TransactionType;
    description?: string;
    loading?: boolean;
};

export const Transaction: FC<TransactionProps> = ({
    title,
    description,
    value,
    type,
    loading,
}) => {
    if (loading) {
        return (
            <List.Item>
                <List.Item.Meta
                    title={<Skeleton.Input size="small" />}
                    description={<Skeleton.Input size="small" />}
                />
                <div>
                    <Skeleton.Input size="small" />
                </div>
            </List.Item>
        );
    }

    return (
        <List.Item>
            <List.Item.Meta title={title} description={description} />
            <div>
                {type === TransactionType.Income ? '+' : '-'} {value}
            </div>
        </List.Item>
    );
};
