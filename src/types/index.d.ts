export {};
type NoParamFunc = () => void;
type PushState = (path: string) => void;
// 用户信息模型
declare type UserInfo = {
  avatar: string;
  id: string;
  nickname: string;
};

declare global {
  import type { EventCenterForMicroApp } from '@micro-zoe/micro-app';
  interface Window {
    $YS: {
      userInfo?: UserInfo;
      Util: {
        logout: NoParamFunc;
        pushState: PushState;
        toHome: NoParamFunc;
        [index: string]: any;
      };
      accessToken: string;
      tenantId: string;
      roles: string[];
      permission: string[];
      menus: any[];
    };

    __dynamic_base_mse__: string;
    // MSE 通信对象
    eventCenterForMseVite: EventCenterForMicroApp;
    // GQ 通信对象
    eventCenterForMseVite: EventCenterForMicroApp;
    __dynamic_base_GQ__: string;
  }
}
