import { RouteProps } from 'react-router-dom';

import { lazy } from 'react';

export const PATH_ABOUT = '/about';
export const PATH_EDUCATION = '/education';
export const PATH_CONTACT = '/contact';

export type AppRouteProps = RouteProps & {
  name: string;
  isNavigation?: boolean;
};

const AppRoutes: AppRouteProps[] = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    isNavigation: true,
    component: lazy(() => import('@views/Home')),
  },
  {
    path: PATH_ABOUT,
    exact: true,
    name: 'About',
    isNavigation: true,
    component: lazy(() => import('@views/About')),
  },
  {
    path: PATH_EDUCATION,
    exact: true,
    name: 'Education',
    isNavigation: true,
    component: lazy(() => import('@views/Education')),
  },
  {
    path: PATH_CONTACT,
    exact: true,
    name: 'Contact',
    isNavigation: true,
    component: lazy(() => import('@views/Contact')),
  },
  {
    path: '*',
    name: '404',
    component: lazy(() => import('@views/Error404')),
  },
];

export default AppRoutes;
