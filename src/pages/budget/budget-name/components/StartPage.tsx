import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { useUnit } from 'effector-react';
import { $budgetList } from '_models/budget';
import { FC } from 'react';
import { useStyles } from '_components/layouts/main/styles';

type DataType = {
    key: string;
    name: string;
    date: string;
};

export const StartPage: FC = () => {
    const { styles } = useStyles();

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const budgetList = useUnit($budgetList);

    const budgetListTable: DataType[] = budgetList.map((budget) => {
        return {
            key: budget.id,
            name: budget.name,
            // balance: budget.balance,
            date: budget.createdAt,
        };
    });

    return (
        <Table<DataType>
            className={styles.startPage}
            columns={columns}
            dataSource={budgetListTable}
        />
    );
};
