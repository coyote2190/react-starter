import { Outlet } from 'react-router';

import { Header } from '@/components';

import { StyleMainLayout } from './mainLayout.styles';

const MainLayout = () => (
  <StyleMainLayout>
    <Header />
    <main>
      <Outlet />
    </main>
  </StyleMainLayout>
);

export default MainLayout;
