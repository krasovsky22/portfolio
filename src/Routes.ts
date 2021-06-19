import { RouteProps } from 'react-router-dom';

import { lazy } from 'react';

export const PATH_WORKS = '/works';

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
    path: '*',
    name: '404',
    component: lazy(() => import('@views/Error404')),
  },
];

export default AppRoutes;
