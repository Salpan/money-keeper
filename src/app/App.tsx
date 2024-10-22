import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../common/components/layouts/main';
import { BudgetCreate } from '../pages/budget-create/BudgetCreate';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/*'} element={<MainLayout />}>
                    <Route path={'budget/create'} element={<BudgetCreate />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
