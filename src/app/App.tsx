import { Analytics } from '_analytics/Analytics';
import { BudgetCreate } from '_budget/budget-create/BudgetCreate';
import { BudgetName } from '_budget/budget-name/BudgetName';
import { MainLayout } from '_components/layouts/main';
import { theme } from '_consts/theme';
import { Settings } from '_settings/Settings';
import { Expense } from '_transactions/expense/Expense';
import { Incomes } from '_transactions/incomes/Incomes';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../models/init';

function App() {
    return (
        <ConfigProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/*'} element={<MainLayout />}>
                        <Route path={'budget/:id'} element={<BudgetName />} />
                        <Route
                            path={'budget/create'}
                            element={<BudgetCreate />}
                        />
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
        </ConfigProvider>
    );
}

export default App;
