/*
 * @Author: simtek/yangrui 17368465776@163.com
 * @Date: 2023-08-14 15:38:06
 * @LastEditors: simtek/yangrui 17368465776@163.com
 * @LastEditTime: 2023-11-02 10:10:56
 * @FilePath: \ys-frontend\src\enums\storage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export enum StorageEnum {
  // 用户名名称
  SIMTEK_USER = '__ysUser',
  // access token
  SIMTEK_ACCESS_TOKEN = '__ysAccessToken',
  // refresh token
  SIMTEK_REFRESH_TOKEN = '__ysRefreshToken',
  // 租户编号
  SIMTEK_TENANT_ID = '__ysTenantId',
  // 菜单路由
  SIMTEK_USER_MENU = '__ysRoleRouters',

  SIMTEK_USER_PERSSIONS = '__ysPerssions',

  SIMTEK_USER_ROLES = '__ysROLES',
  // 失效 时间
  SIMTEK_ADMIN_EXPIRES_IN = 'Admin-Expires-In'
}
