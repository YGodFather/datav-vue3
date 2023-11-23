/*
 * @Author: simtek/yangrui 17368465776@163.com
 * @Date: 2023-08-14 13:48:39
 * @LastEditors: simtek/yangrui 17368465776@163.com
 * @LastEditTime: 2023-09-14 15:11:01
 * @FilePath: \ys-frontend\src\utils\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RESP_STATUS } from '@/enums';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { useUserStore } from '@/store';

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 30 * 1000,
  withCredentials: true
});

http.interceptors.request.use(config => {
  const useStore = useUserStore();
  config.headers['Authorization'] = useStore.getAccessToken
    ? `Bearer ${useStore.getAccessToken}`
    : '';
  config.headers['Tenant-Id'] = useStore.getTenantId;
  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 处理200问题
    if (response.status === RESP_STATUS.SUCCESS) {
      return response.data;
    }
    return Promise.reject(response);
  },
  err => {
    return Promise.reject(err);
  }
);

export default http;
