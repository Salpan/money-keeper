import axios from 'axios';
import { BUDGET } from '_consts/api';
import { BudgetApi } from '_types/api';

export const budgetApi: BudgetApi = {
    getBudgetById: (id: string) => {
        return axios(`${BUDGET}/${id}`);
    },

    getAllBudgets: () => {
        return axios(`${BUDGET}/all`);
    },

    postBudget: (newBudget) => {
        return axios(BUDGET, { method: 'POST', data: newBudget });
    },
};
