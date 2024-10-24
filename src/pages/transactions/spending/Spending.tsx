import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
    Select,
    Space,
    Typography,
} from 'antd';
import { FC } from 'react';
import { categoriesList } from '../../../common/consts/categories-list';

type Spending = {
    amount?: number;
    categories?: string;
    date?: string;
    description?: string;
};

export const Spending: FC = () => {
    const finishHandler = (values: unknown) => {
        console.log(values);
    };

    return (
        <Flex gap={20} vertical>
            <Typography.Title level={4}>Новое поступление</Typography.Title>
            <Form size="large" onFinish={finishHandler}>
                <Space direction="vertical" size="large">
                    <Form.Item<Spending>
                        label="Сумма"
                        name="amount"
                        layout="vertical"
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item<Spending>
                        label="Категория"
                        name="categories"
                        layout="vertical"
                    >
                        <Select>
                            {categoriesList
                                .sort((a, b) => (a.name > b.name ? 1 : -1))
                                .map((category) => {
                                    return (
                                        <Select.Option value={category.value}>
                                            {category.name}
                                        </Select.Option>
                                    );
                                })}
                        </Select>
                    </Form.Item>
                    <Form.Item<Spending>
                        label="Дата"
                        name="date"
                        layout="vertical"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item<Spending>
                        label="Описание"
                        name="description"
                        layout="vertical"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Сохранить транзакцию</Button>
                    </Form.Item>
                </Space>
            </Form>
        </Flex>
    );
};
