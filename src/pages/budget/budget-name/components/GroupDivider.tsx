import { List } from 'antd';
import dayjs from 'dayjs';
import { FC } from 'react';

// require('dayjs/locale/ru');

type GroupDividerProps = {
    date?: string;
};

export const GroupDivider: FC<GroupDividerProps> = ({ date }) => {
    if (!date) {
        return null;
    }

    return <List.Item>{dayjs(date).format('DD MMMM YYYY')}</List.Item>;
};
