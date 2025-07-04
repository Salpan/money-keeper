import { rules, rulesWithValidator } from '_consts/rules';
import { addBudgetEv, addBudgetFx } from '_models/budget';
import { BudgetRequest } from '_types/budget';
import { Button, DatePicker, Flex, Form, Input, Typography } from 'antd';
import { useUnit } from 'effector-react';
import { FC } from 'react';

type FormFields = {
    name: string;
    period: string;
    startBudget?: string;
    endBudget?: string;
};

const formToBudgetConverter = (values: FormFields): BudgetRequest => {
    return {
        name: values.name,
        period: values.period,
        startBudget: Number(values?.startBudget),
        endBudget: Number(values?.endBudget),
    };
};

export const BudgetCreate: FC = () => {
    const finishHandler = (values: FormFields) => {
        addBudgetEv(formToBudgetConverter(values));
    };

    const isPending = useUnit(addBudgetFx.pending);

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>Создание бюджета</Typography.Title>
            <Form size="large" layout="vertical" onFinish={finishHandler}>
                <Form.Item<FormFields>
                    label="Название бюджета"
                    name="name"
                    rules={[rules, rulesWithValidator]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FormFields>
                    label="Период"
                    name="period"
                    rules={[rules]}
                >
                    <DatePicker.RangePicker format={'YYYY-MM-DD'} />
                </Form.Item>
                <Form.Item<FormFields>
                    label="Начальный капитал"
                    name="startBudget"
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<FormFields>
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
