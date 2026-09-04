import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/not-found';
import { NotesPage } from './pages/notes/ index';
import { UsersPage } from './pages/users';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: '*', Component: NotFoundPage },
    ],
  },
  {
    path: 'users',
    Component: RootLayout,
    children: [
      { index: true, Component: UsersPage },
      // { path: ':id', Component: UserDetailPage },
    ],
  },
  {
    path: 'notes',
    Component: RootLayout,
    children: [{ index: true, Component: NotesPage }],
  },
]);
