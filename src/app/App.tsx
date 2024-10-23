import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../common/components/layouts/main';
import { Enrichment } from '../pages/transactions/enrichment/Enrichment';
import { Spending } from '../pages/transactions/spending/Spending';
import { Analytics } from '../pages/analytics/Analytics';
import { Settings } from '../pages/settings/Settings';
import { BudgetCreate } from '../pages/budget/budget-create/BudgetCreate';
import { BudgetName } from '../pages/budget/budget-name/BudgetName';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<MainLayout />}>
                    <Route
                        path={'budget/budgetName'}
                        element={<BudgetName />}
                    />
                    <Route path={'budget/create'} element={<BudgetCreate />} />
                    <Route
                        path={'transactions/spending'}
                        element={<Spending />}
                    />
                    <Route
                        path={'transactions/enrichment'}
                        element={<Enrichment />}
                    />
                    <Route path={'analytics'} element={<Analytics />} />
                    <Route path={'settings'} element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
