import axios from 'axios';
import { TRANSACTION } from '_consts/api';
import { TransactionApi } from '_types/api';

export const transactionApi: TransactionApi = {
    postTransaction: (newTransaction) => {
        return axios(TRANSACTION, { method: 'POST', data: newTransaction });
    },
};
