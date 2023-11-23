import { defineStore } from 'pinia';
import { getLocalStorage, setLocalStorage } from '@/utils';
type UserState = Record<string, any>;
import { clearStorage } from '@/router';
import { StorageEnum } from '@/enums/storage';

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      user: null,
      accessToken: '',
      refreshToken: '',
      tenantId: ''
    };
  },
  getters: {
    getTenantId() {
      return this.tenantId;
    },
    getAccessToken() {
      return this.accessToken;
    },
    getUser() {
      return this.user;
    },
    getSurname() {
      return this.user?.nickname?.[0] || '';
    },
    getUsername() {
      return this.user?.username || '';
    }
  },
  actions: {
    upadteUser(user) {
      this.user = user;
    },
    logout() {
      this.user = null;
      this.accessToken = '';
      this.refreshTokenKey = '';
      clearStorage();
    },
    setToken(token: { accessToken: string; refreshToken: string }) {
      this.accessToken = token.accessToken;
      this.refreshToken = token.refreshToken;
    },
    setTenantId(id: number) {
      this.tenantId = id;
    }
  }
});
