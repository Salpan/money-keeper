import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            _components: '/src/common/components',
            _analytics: '/src/pages/analytics',
            _budget: '/src/pages/budget',
            _settings: '/src/pages/settings',
            _transactions: '/src/pages/transactions',
            _consts: '/src/common/consts',
            _models: '/src/models',
            _api: '/src/common/api',
            _types: '/src/common/types',
            _enums: '/src/common/enums',
            _converters: '/src/common/converters',
        },
    },
    plugins: [react()],
});
