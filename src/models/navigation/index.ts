import { createEffect, createEvent, restore } from 'effector';
import type { NavigateFunction } from 'react-router-dom';

export const setNavigateEv = createEvent<NavigateFunction>('setNavigateEv');

export const $navigateFunction = restore(setNavigateEv, () => undefined);

export const navigateEv = createEvent<string>('navigateEv');

export const navigateFx = createEffect(
    ({ navigate, to }: { navigate: NavigateFunction; to: string }) => {
        navigate(to);
    },
);
