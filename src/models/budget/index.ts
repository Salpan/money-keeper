import { createEffect, createEvent, createStore } from 'effector';
import { BudgetDefaultDTO } from '../../common/types/budget';
import { budgetApiMock } from '../../common/api/_mock_/budgetApiMock';

const { getBudgetById } = budgetApiMock;

export const $budget = createStore<BudgetDefaultDTO | null>(null);

export const getBudgetByIdFx = createEffect(getBudgetById);

export const getBudgetEv = createEvent<string>('getBudgetEv');
