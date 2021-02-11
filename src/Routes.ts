import { RouteProps } from 'react-router-dom';

import { lazy } from 'react';

export const PATH_WORKS = '/works';
export const PATH_EDUCATION = '/education';
export const PATH_PLAYGROUND = '/playground';
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
    path: PATH_WORKS,
    exact: true,
    name: 'Works',
    isNavigation: true,
    component: lazy(() => import('@/views/Works')),
  },
  {
    path: PATH_EDUCATION,
    exact: true,
    name: 'Resume',
    isNavigation: true,
    component: lazy(() => import('@views/Resume')),
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
