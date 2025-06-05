import { createEffect, createEvent } from 'effector';
import { transactionApiMock } from '_api/_mock_/budgetApiMock';
import { TransactionForm } from '_types/transactions';

const { postTransaction } = transactionApiMock;

export const addTransactionFx = createEffect(postTransaction);

export const createTransactionEv = createEvent<TransactionForm>(
    'createTransactionEv',
);
