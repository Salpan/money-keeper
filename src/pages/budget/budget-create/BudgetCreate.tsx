import { rules, rulesWithValidator } from '_consts/rules';
import { addBudgetEv, addBudgetFx } from '_models/budget';
import { BudgetRequest } from '_types/budget';
import { Button, DatePicker, Flex, Form, Input, Typography } from 'antd';
import { useUnit } from 'effector-react';
import { FC } from 'react';

export const BudgetCreate: FC = () => {
    const finishHandler = (values: BudgetRequest) => {
        addBudgetEv(values);
        console.log(Number(values.startBudget));
    };

    const isPending = useUnit(addBudgetFx.pending);

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>Создание бюджета</Typography.Title>
            <Form size="large" layout="vertical" onFinish={finishHandler}>
                <Form.Item<BudgetRequest>
                    label="Название бюджета"
                    name="name"
                    rules={[rules, rulesWithValidator]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<BudgetRequest>
                    label="Период"
                    name="period"
                    rules={[rules]}
                >
                    <DatePicker.RangePicker format={'YYYY-MM-DD'} />
                </Form.Item>
                <Form.Item<BudgetRequest>
                    label="Начальный капитал"
                    name="startBudget"
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<BudgetRequest>
                    label="Ожидаемый бюджет на конец периода"
                    name="endBudget"
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        loading={isPending}
                        disabled={isPending}
                    >
                        Создать бюджет
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    );
};
