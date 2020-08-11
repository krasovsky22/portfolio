import { RouteProps } from 'react-router-dom';

import { lazy } from 'react';

export const PATH_ABOUT = '/about';
export const PATH_EDUCATION = '/education';

const AppRoutes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@views/Home')),
  },
  {
    path: '/about',
    exact: true,
    component: lazy(() => import('@views/About')),
  },
  {
    path: '/education',
    exact: true,
    component: lazy(() => import('@views/Education')),
  },
  {
    path: '*',
    component: lazy(() => import('@views/Error404')),
  },
];

export default AppRoutes;
