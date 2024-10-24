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
import { rules } from '../../../common/consts/rules';

type EnrichmentCreateFields = {
    amount?: number;
    date?: string;
    method?: string;
};

export const Enrichment: FC = () => {
    const finishHandler = (values: unknown) => {
        console.log(values);
    };

    return (
        <Flex gap={30} vertical>
            <Typography.Title level={4}>Новое поступление</Typography.Title>
            <Form size="large" onFinish={finishHandler}>
                <Space direction="vertical" size="large">
                    <Form.Item<EnrichmentCreateFields>
                        label="Сумма"
                        name="amount"
                        layout="vertical"
                        rules={[rules]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item<EnrichmentCreateFields>
                        label="Дата"
                        name="date"
                        layout="vertical"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item<EnrichmentCreateFields>
                        label="Способ"
                        name="method"
                        layout="vertical"
                    >
                        <Select>
                            <Select.Option value="cash">Наличные</Select.Option>
                            <Select.Option value="transfer">
                                Перевод
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Сохранить транзакцию</Button>
                    </Form.Item>
                </Space>
            </Form>
        </Flex>
    );
};
