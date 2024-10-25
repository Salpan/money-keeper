import { sample } from 'effector';
import { $budget, getBudgetByIdFx, getBudgetEv } from '.';

sample({
    clock: getBudgetEv,
    target: getBudgetByIdFx,
});

sample({
    clock: getBudgetByIdFx.doneData,
    target: $budget,
});
