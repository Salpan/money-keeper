import { createEffect, createEvent, createStore } from 'effector';
import { BudgetRequest, BudgetResponse } from '_types/budget';
import { budgetApiMock } from '_api/_mock_/budgetApiMock';

const { getBudgetById, getAllBudgets, postBudget } = budgetApiMock;

export const $budget = createStore<BudgetResponse | null>(null);

export const getBudgetByIdFx = createEffect(getBudgetById);

export const getBudgetEv = createEvent<string>('getBudgetEv');

export const getAllBudgetsEv = createEvent('getAllBudgetsEv');

export const getAllBudgetFx = createEffect(getAllBudgets);

export const $budgetList = createStore<BudgetResponse[]>([]);

export const addBudgetEv = createEvent<BudgetRequest>('addBudgetEv');

export const addBudgetFx = createEffect(postBudget);
