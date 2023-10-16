import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const TeacherList = Loadable(lazy(() => import('pages/dashboard/TeacherList')));
const StudentList = Loadable(lazy(() => import('pages/dashboard/StudentList')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      children: [
        {
          path: 'teacher-list',
          element: <TeacherList />
        },
        {
          path: 'student-list',
          element: <StudentList />
        }
      ]
    }
  ]
};

export default MainRoutes;
