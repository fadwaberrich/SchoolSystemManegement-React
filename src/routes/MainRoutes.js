import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      children: [
        {
          path: 'teacher-list',
          element: <DashboardDefault />
        },
        {
          path: 'student-list',
          element: <DashboardDefault />
        }
      ]
    }
  ]
};

export default MainRoutes;
