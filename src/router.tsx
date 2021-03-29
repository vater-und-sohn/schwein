import loadable from '@loadable/component';
import { RouteType } from '@/interfaces/route';

export const router: RouteType[] = [
  {
    path: '/',
    component: loadable(() => import('@/layouts/BasicLayout')),
    route: [
      {
        path: '/',
        redirect: '/male',
      },
      {
        path: '/male',
        name: '公猪',
        component: loadable(() => import('@/pages/male')),
      },
      {
        path: '/female',
        name: '母猪',
        component: loadable(() => import('@/pages/female')),
      },
      { path: '*', component: loadable(() => import('@/404')) },
    ],
  },
  { path: '*', component: loadable(() => import('@/404')) },
];
