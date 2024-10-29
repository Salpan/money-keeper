import { createEffect, createEvent, createStore } from 'effector';
import { BudgetDefaultDTO } from '_types/budget';
import { budgetApiMock } from '_api/_mock_/budgetApiMock';

const { getBudgetById } = budgetApiMock;

export const $budget = createStore<BudgetDefaultDTO | null>(null);

export const getBudgetByIdFx = createEffect(getBudgetById);

export const getBudgetEv = createEvent<string>('getBudgetEv');
