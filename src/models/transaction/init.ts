import { sample } from 'effector';
import { addTransactionFx, createTransactionEv } from '.';
import { $budget } from '_models/budget';
import { navigateEv } from '_models/navigation';

sample({
    clock: createTransactionEv,
    source: $budget,
    filter: (budget) => Boolean(budget?.id),
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    fn: (budget, transaction) => ({ ...transaction, budgetId: budget?.id! }),
    target: addTransactionFx,
});

sample({
    clock: addTransactionFx.doneData,
    fn: (response) => {
        return response.data?.budgetId
            ? `budget/${response.data.budgetId}`
            : '';
    },
    target: navigateEv,
});
