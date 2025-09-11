import { BrowserRouter, Route, Routes } from 'react-router';

import { MainLayout } from '@/layouts';
import { Home } from '@/pages';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} path='/' />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
