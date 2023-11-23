import JsCookie from 'js-cookie';

const YS_TOKEN = 'Admin-Token';
/**
 * @description: 设置token 值
 * @param {string} token
 * @return {*}
 */
export function setToken(token: string): void {
  JsCookie.set(YS_TOKEN, token);
}

/**
 * @description: 获取token 值
 * @return {*}
 */
export function getToken(): string | undefined {
  return JsCookie.get(YS_TOKEN);
}

export function removeToken() {
  return JsCookie.remove(YS_TOKEN);
}

/**
 * @description: 清空Cookies数据
 * @return {*}
 */
export function clearCookies() {
  removeToken();
}
