import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/project',
      component: () => import('@/views/projects/project-layout/index.vue'),
      children: []
    },
    {
      path: '/chart-edit',
      component: () => import('@/views/chart-edit/index.vue')
    }
  ]
});

export async function setupRouter(app: App) {
  createRouterGuard();
  app.use(router);
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}

export function clearStorage() {}

/**
 * @description: 处理路由导航基础版
 * @return {*}
 */
function createRouterGuard() {}

export default router;
