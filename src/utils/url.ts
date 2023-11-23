/**
 * @description: 获取assets文件文件的静态路径地址
 * @param {string} filePath
 * @return {*}
 */
export function getAssetFileUrl(filePath: string): string {
  return new URL(`@/assets/${filePath}`, import.meta.url).href;
}

/**
 * @description: 打包后图片地址修正为 打包路径地址
 * @param {string} path
 * @return {*}
 */
export function getPubStaticFile(path: string): string {
  return `${import.meta.env.VITE_STATIC_IMG_PREFIX}${
    path.startsWith('/') ? path : `/${path}`
  }`;
}
