import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useUnit } from 'effector-react';
import { $budgetList } from '_models/budget';
import { FC } from 'react';
import { useStyles } from '_components/layouts/main/styles';
import dayjs from 'dayjs';

type DataType = {
    key: string;
    name: string;
    date: string;
};

export const StartPage: FC = () => {
    const { styles } = useStyles();

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Бюджет',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Баланс',
            dataIndex: 'balance',
            key: 'balance',
        },
        {
            title: 'Дата создания',
            dataIndex: 'date',
            key: 'date',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
    ];

    const budgetList = useUnit($budgetList);

    const budgetListTable: DataType[] = budgetList.map((budget) => {
        return {
            key: budget.id,
            name: budget.name,
            // balance: budget.balance,
            date: dayjs(budget?.createdAt).format(`DD.MM.YYYY`),
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
