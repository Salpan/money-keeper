import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
    Select,
    Typography,
} from 'antd';
import { FC } from 'react';
import { rules, rulesWithValidator } from '_consts/rules';
import { categoriesList } from '_consts/categoriesList';

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
            <Form size="large" layout="vertical" onFinish={finishHandler}>
                <Form.Item<Expense> label="Сумма" name="amount" rules={[rules]}>
                    <Input type="number" />
                </Form.Item>
                <Form.Item<Expense>
                    label="Категория"
                    name="categories"
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
                <Form.Item<Expense> label="Дата" name="date" layout="vertical">
                    <DatePicker />
                </Form.Item>
                <Form.Item<Expense>
                    label="Описание"
                    name="description"
                    rules={[rulesWithValidator]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Сохранить транзакцию</Button>
                </Form.Item>
            </Form>
        </Flex>
    );
};
