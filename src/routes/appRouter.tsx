import { BrowserRouter, Route, Routes } from 'react-router';

import { MainLayout } from '@/layouts';
import { Home, NotFound } from '@/pages';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
