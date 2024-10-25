import { Analytics } from '_analytics/Analytics';
import { BudgetCreate } from '_budget/budget-create/BudgetCreate';
import { BudgetName } from '_budget/budget-name/BudgetName';
import { MainLayout } from '_components/layouts/main';
import { Settings } from '_settings/Settings';
import { Incomes } from '_transactions/incomes/Incomes';
import { Expense } from '_transactions/spending/Expense';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
                        path={'transactions/expense'}
                        element={<Expense />}
                    />
                    <Route
                        path={'transactions/incomes'}
                        element={<Incomes />}
                    />
                    <Route path={'analytics'} element={<Analytics />} />
                    <Route path={'settings'} element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
