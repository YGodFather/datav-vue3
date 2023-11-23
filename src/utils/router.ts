import { usePermission, useUserStore } from '@/store';
import { useRoute } from 'vue-router';
import router from '@/router';
import { RouterEnum } from '@/enums';
import { ElMessage } from 'element-plus';

/**
 * * 根据名字跳转路由
 * @param pageName
 * @param isReplace
 * @param windowOpen
 */
export const goRouteByName = (
  pageName: string,
  isReplace?: boolean,
  windowOpen?: boolean
) => {
  if (windowOpen) {
    const path = fetchPathByName(pageName, 'href');
    openNewWindow(path);
    return;
  }
  if (isReplace) {
    router.replace({
      name: pageName
    });
    return;
  }
  router.push({
    name: pageName
  });
};

/**
 * * 根据名称获取路由信息
 * @param pageName
 * @param pageName
 */
export const fetchPathByName = (pageName: string, p?: string) => {
  try {
    const pathData = router.resolve({
      name: pageName
    });
    return p ? (pathData as any)[p] : pathData;
  } catch {
    ElMessage.warning('查询路由信息失败，请联系管理员！');
  }
};

/**
 * * 根据路径跳转路由
 * @param path
 * @param query
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByPath = (
  path: string,
  query?: Array<string | number>,
  isReplace?: boolean,
  windowOpen?: boolean
) => {
  let fullPath = '';
  if (query?.length) {
    fullPath = `${path}/${query.join('/')}`;
  }
  if (windowOpen) {
    return openNewWindow(fullPath);
  }
  if (isReplace) {
    router.replace({
      path: fullPath
    });
    return;
  }
  router.push({
    path: fullPath
  });
};

/**
 * * 退出
 */
export function logout() {
  window.$YS = null;
  const userStore = useUserStore();
  // clearLocalStorage(StorageEnum.SIMTEK_USER);
  const permissionStore = usePermission();
  userStore.logout();
  permissionStore.$reset();
  goRouteByName(RouterEnum.LOGIN_NAME);
}

/**
 * * 新开页面
 * @param url
 */
export const openNewWindow = (url: string) => {
  return window.open(url, '_blank');
};

/**
 * * 获取当前路由下的参数
 * @returns object
 */
export const fetchRouteParams = () => {
  try {
    const route = useRoute();
    return route.params;
  } catch {
    ElMessage.warning('查询路由信息失败，请联系管理员！');
  }
};

/**
 * * 通过硬解析获取当前路由下的参数
 * @returns object
 */
export const fetchRouteParamsLocation = () => {
  try {
    return document.location.hash.split('/').pop() || '';
  } catch {
    ElMessage.warning('查询路由信息失败，请联系管理员！');
    return '';
  }
};

/**
 * * 回到主页面
 * @param confirm
 */
export const goHome = () => {
  goRouteByName(RouterEnum.HOME_NAME);
};

/**
 * @description: 开启通过注册列表的地址开启本地客户端
 * @param {string} url
 * @return {*}
 */
export const startLocalClient = (url: string): void => {
  window.open(url, '_blank');
};
