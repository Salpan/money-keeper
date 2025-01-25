import { sample } from 'effector';
import {
    $budget,
    $budgetList,
    addBudgetEv,
    addBudgetFx,
    getAllBudgetFx,
    getAllBudgetsEv,
    getBudgetByIdFx,
    getBudgetEv,
} from '.';
import { navigateEv } from '_models/navigation';

sample({
    clock: getBudgetEv,
    target: getBudgetByIdFx,
});

sample({
    clock: [getBudgetByIdFx.doneData, addBudgetFx.doneData],
    fn: (response) => response.data ?? null,
    target: $budget,
});

sample({
    clock: getAllBudgetsEv,
    target: getAllBudgetFx,
});

sample({
    clock: getAllBudgetFx.doneData,
    fn: (response) => response.data ?? [],
    target: $budgetList,
});

sample({
    clock: addBudgetEv,
    target: addBudgetFx,
});

sample({
    clock: addBudgetFx.doneData,
    fn: (response) => {
        console.log({ response });
        return response.data?.id ? `budget/${response.data.id}` : '';
    },
    target: [navigateEv, getAllBudgetsEv],
});
