import type { RouteRecordRaw } from 'vue-router';

/**
 * @description: 静态路由
 * home
 * login 登录页
 * 404 页面
 */
export const STATIC_ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: HomeView
      }
    ]
  },
  {
    path: '/:page*',
    name: 'pageNodeFound',
    component: () => import('@/views/error/404.vue')
  }
];
