import { rules } from '_consts/rules';
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

type IncomesCreateFields = {
    amount?: number;
    date?: string;
    method?: string;
};

export const Incomes: FC = () => {
    const finishHandler = (values: unknown) => {
        console.log(values);
    };

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>Новое поступление</Typography.Title>
            <Form size="large" onFinish={finishHandler} layout="vertical">
                <Form.Item<IncomesCreateFields>
                    label="Сумма"
                    name="amount"
                    rules={[rules]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<IncomesCreateFields> label="Дата" name="date">
                    <DatePicker />
                </Form.Item>
                <Form.Item<IncomesCreateFields> label="Способ" name="method">
                    <Select>
                        <Select.Option value="cash">Наличные</Select.Option>
                        <Select.Option value="transfer">Перевод</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Сохранить транзакцию</Button>
                </Form.Item>
            </Form>
        </Flex>
    );
};
