import { sample } from 'effector';
import { $navigateFunction, navigateEv, navigateFx } from '.';

sample({
    source: $navigateFunction,
    clock: navigateEv,
    fn: (navigate, to) => ({ navigate, to }),
    target: navigateFx,
});
