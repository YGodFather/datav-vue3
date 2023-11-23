/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-07 14:58:52
 * @LastEditors: simtek/yangrui 17368465776@163.com
 * @LastEditTime: 2023-09-14 10:17:24
 * @FilePath: \yssim_frontend\src\types\global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEe
 */
// 响应体的数据类型
declare type YSSIM_RESP<T> = {
  data: T;
  msg: string;
  code: number;
};

declare type YSSIM_RESP_ARRAT<T> = YSSIM_RESP<T[]>;

declare type YSSIM_RESP_STRING<U = string> = YSSIM_RESP<U>;

declare type PromiseArray<T> = Promise<YSSIM_RESP_ARRAT<T>>;

declare type PromiseString = Promise<YSSIM_RESP_STRING<string>>;

declare type PromiseT<T> = Promise<YSSIM_RESP<T>>;

// micro-app 全局的数据结构
declare interface MicroGlobalData {
  $UserInfo: UserInfo;
  $Util: {
    logout?: () => void;
    router?: Router;
    goHome: () => void;
  };
  [key: string]: any;
}
