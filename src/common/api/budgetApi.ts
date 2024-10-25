import axios from 'axios';
import { BudgetResponse } from '../types/budget';
import { BUDGET } from '_consts/api';

export const budgetApi = {
    getBudgetById: (id: string): Promise<BudgetResponse> => {
        return axios(`${BUDGET}/${id}`);
    },
};
