import axios from 'axios';
import { BUDGET } from '_consts/api';
import { BudgetResponse } from '_types/budget';

export const budgetApi = {
    getBudgetById: (id: string): Promise<BudgetResponse> => {
        return axios(`${BUDGET}/${id}`);
    },
};
