import { Analytics } from '_analytics/Analytics';
import { BudgetCreate } from '_budget/budget-create/BudgetCreate';
import { BudgetName } from '_budget/budget-name/BudgetName';
import { MainLayout } from '_components/layouts/main';
import { Settings } from '_settings/Settings';
import { Expense } from '_transactions/expense/Expense';
import { Incomes } from '_transactions/incomes/Incomes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dayjs from 'dayjs';
import '_models/init';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { StartPage } from '_budget/budget-name/components/StartPage';
import { NotFound } from '../pages/notFound/NotFound';

dayjs.extend(customParseFormat);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<MainLayout />}>
                    <Route path={'/*'} element={<StartPage />} />
                    <Route path={'budget/:id'} element={<BudgetName />} />
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
                    <Route path={'budget/:id/404'} element={<NotFound />} />
                    <Route path={'*'} element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
