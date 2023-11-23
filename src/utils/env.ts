/**
 * @description: 是否为开发环境
 * @return {*}
 */
export function isProd(): boolean {
  return import.meta.env.MODE === 'production';
}

/**
 * @description: 获取命名空间
 * @param {string} value
 * @return {*}
 */
export function prefixNs(value: string): string {
  return `__${value}`;
}
