import { rules, rulesWithValidator } from '_consts/rules';
import { Button, DatePicker, Flex, Form, Input, Typography } from 'antd';
import { FC } from 'react';

type BudgetCreateFields = {
    name?: string;
    period?: string;
    startBudget?: number;
    endBudget?: number;
};

export const BudgetCreate: FC = () => {
    const finishHandler = (values: unknown) => {
        console.log(values);
    };

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>Создание бюджета</Typography.Title>
            <Form size="large" layout="vertical" onFinish={finishHandler}>
                <Form.Item<BudgetCreateFields>
                    label="Название бюджета"
                    name="name"
                    rules={[rules, rulesWithValidator]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<BudgetCreateFields>
                    label="Период"
                    name="period"
                    rules={[rules]}
                >
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item<BudgetCreateFields>
                    label="Начальный капитал"
                    name="startBudget"
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<BudgetCreateFields>
                    label="Ожидаемый бюджет на конец периода"
                    name="endBudget"
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Создать бюджет</Button>
                </Form.Item>
            </Form>
        </Flex>
    );
};
