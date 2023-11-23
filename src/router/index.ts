import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';

import { STATIC_ROUTES } from './static-router';
import { useUserStore } from '@/store';
import { clearLocalStorage } from '@/utils';
import { StorageEnum } from '@/enums/storage';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...STATIC_ROUTES,
    {
      path: '/simtek-mse:page*',
      name: 'mse',
      component: () => import('@/views/mse/index.vue')
    },
    {
      path: '/simtek-demediation-model:page*',
      name: 'demediationModel',
      component: () => import('@/views/demediation-model/index.vue')
    },
    {
      path: '/simtek-cosim:page*',
      name: 'cosim',
      component: () => import('@/views/cosim/index.vue')
    },
    {
      path: '/simtek-yssim:page*',
      name: 'yssim',
      component: () => import('@/views/yssim/index.vue')
    },
    {
      path: '/simtek-spdm:page*',
      name: 'spdm',
      component: () => import('@/views/spdm/index.vue')
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

export function clearStorage() {
  clearLocalStorage(StorageEnum.SIMTEK_USER);
  clearLocalStorage(StorageEnum.SIMTEK_TENANT_ID);
  clearLocalStorage(StorageEnum.SIMTEK_ACCESS_TOKEN);
  clearLocalStorage(StorageEnum.SIMTEK_REFRESH_TOKEN);
  clearLocalStorage(StorageEnum.SIMTEK_USER_MENU);
}

/**
 * @description: 处理路由导航基础版
 * @return {*}
 */
function createRouterGuard() {
  router.beforeEach((to, from, next) => {
    const toPath = to.path;
    const userStore = useUserStore();
    if (userStore.getAccessToken) {
      if (toPath === '/login') {
        return next({ path: '/home' });
      }
      return next();
    } else {
      if (toPath === '/login') {
        next();
      } else {
        next({ path: '/login', query: { redirect: to.fullPath } });
      }
    }
  });
}

export default router;
