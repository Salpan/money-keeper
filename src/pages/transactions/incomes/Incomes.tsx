import { rules } from '_consts/rules';
import { TransactionType } from '_enums/TransactionType';
import { $budget } from '_models/budget';
import { addTransactionFx, createTransactionEv } from '_models/transaction';
import { ExpenseField, TransactionForm } from '_types/transactions';
import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
    Select,
    Typography,
} from 'antd';
import { useUnit } from 'effector-react';
import { FC } from 'react';

export const Incomes: FC = () => {
    const budget = useUnit($budget);
    const isPending = useUnit(addTransactionFx.pending);

    const finishHandler = (values: TransactionForm) => {
        console.log(values);
        createTransactionEv({
            ...values,
            transaction: TransactionType.Income,
            amount: Number(values.amount),
        });
    };
    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>
                Новое поступление {budget?.name}
            </Typography.Title>
            <Typography.Title level={4}>Новое поступление</Typography.Title>
            <Form size="large" onFinish={finishHandler} layout="vertical">
                <Form.Item<ExpenseField>
                    label="Сумма"
                    name="amount"
                    rules={[rules]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<ExpenseField> label="Дата" name="date">
                    <DatePicker />
                </Form.Item>
                <Form.Item<ExpenseField> label="Способ" name="categories">
                    <Select>
                        <Select.Option value="cash">Наличные</Select.Option>
                        <Select.Option value="transfer">Перевод</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button loading={isPending} htmlType="submit">
                        Сохранить транзакцию
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    );
};
