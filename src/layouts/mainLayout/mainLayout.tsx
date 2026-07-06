import { Outlet } from 'react-router';

import { Header } from '@/components';

import styles from './mainLayout.module.css';

const MainLayout = () => (
  <div className={styles.layout}>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
