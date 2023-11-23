/**
 * @description: 输出Info日志
 * @param {array} arg
 * @return {*}
 */
/* eslint-disable no-console */
export function logInfo(...arg: any[]): void {
  console.log('[info] ===>', ...arg);
}

/**
 * @description: 输出错误日志
 * @param {array} arg
 * @return {*}
 */
export function logError(...arg: any[]): void {
  console.error('[error] ===>', ...arg);
}
