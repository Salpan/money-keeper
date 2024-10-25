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
import { rules, rulesWithValidator } from '../../../common/consts/rules';

type Expense = {
    amount?: number;
    categories?: string;
    date?: string;
    description?: string;
};

export const Expense: FC = () => {
    const finishHandler = (values: unknown) => {
        console.log(values);
    };

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>Новая трата</Typography.Title>
            <Form size="large" onFinish={finishHandler}>
                <Space direction="vertical" size={55}>
                    <Form.Item<Expense>
                        label="Сумма"
                        name="amount"
                        layout="vertical"
                        rules={[rules]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item<Expense>
                        label="Категория"
                        name="categories"
                        layout="vertical"
                        rules={[rules]}
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
                    <Form.Item<Expense>
                        label="Дата"
                        name="date"
                        layout="vertical"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item<Expense>
                        label="Описание"
                        name="description"
                        layout="vertical"
                        rules={[rulesWithValidator]}
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
