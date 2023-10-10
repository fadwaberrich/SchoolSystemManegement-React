// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'teacher',
      title: 'Teacher',
      type: 'item',
      url: '/teacher-list',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'student',
      title: 'Student',
      type: 'item',
      url: '/student-list',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
