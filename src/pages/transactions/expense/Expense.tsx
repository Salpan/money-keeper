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
import { useUnit } from 'effector-react';
import { $budget } from '_models/budget';
import { ExpenseField } from '_types/expense';

export const Expense: FC = () => {
    const budget = useUnit($budget);

    const finishHandler = (values: unknown) => {
        console.log(values);
    };

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>
                Новая трата для {budget?.name}
            </Typography.Title>
            <Form size="large" layout="vertical" onFinish={finishHandler}>
                <Form.Item<ExpenseField>
                    label="Сумма"
                    name="amount"
                    rules={[rules]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<ExpenseField>
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
                <Form.Item<ExpenseField> label="Дата" name="date">
                    <DatePicker />
                </Form.Item>
                <Form.Item<ExpenseField>
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
