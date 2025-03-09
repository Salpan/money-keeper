import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useUnit } from 'effector-react';
import { $budgetList } from '_models/budget';
import { FC, useCallback } from 'react';
import { useStyles } from '_components/layouts/main/styles';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { NotFound } from '../../../notFound/NotFound';

type DataType = {
    key: string;
    name: string;
    date: string;
};

export const StartPage: FC = () => {
    const { styles } = useStyles();
    const navigate = useNavigate();

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

    const rowClickHandler = useCallback(
        (id: string) => () => {
            navigate(`/budget/${id}`);
        },
        [navigate],
    );

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
        <div className={styles.startPage}>
            {budgetListTable.length > 0 ? (
                <Table<DataType>
                    onRow={(i) => ({
                        onClick: rowClickHandler(i.key),
                    })}
                    columns={columns}
                    dataSource={budgetListTable}
                />
            ) : (
                <NotFound />
            )}
        </div>
    );
};
