import { defineStore } from 'pinia';
import { getPermissionInfo } from '@/api/login';
import { useUserStore } from './user';
import { setupGloal } from '@/micro-app/setup';
import { cloneDeep } from 'lodash-es';
import { storeUserPerssion2Local } from '@/hooks/user-permission';
import { AppCategory } from '@/enums';
import { getPubStaticFile } from '@/utils';

interface Permission {
  roles: string[];
  menu: [];
  permissions: [];
}

const parseExt = (ext: string) => {
  if (!ext) {
    return {};
  }
  try {
    return JSON.parse(ext);
  } catch {
    return {};
  }
};

const filterApp = (menus: any[], appType: string) => {
  if (menus.length) {
    // 后续提取出去
    return menus[0].children
      .map(menu => {
        const item = cloneDeep(menu);
        item.ext = parseExt(menu.ext);
        item.ext.logo = getPubStaticFile(item.ext.logo);
        return item;
      })
      .filter(menu => {
        return menu.ext.category === appType;
      });
  }
  return [];
};

export const usePermission = defineStore('permission', {
  state: (): Permission => {
    return {
      roles: [],
      menu: [],
      permissions: []
    };
  },
  getters: {
    getRoles: state => {
      return state.roles;
    },
    getMenus: state => {
      return state.menu;
    },
    getPermissions: state => {
      return state.permissions;
    },
    // 获取协同仿真工具
    getCollaborationApps() {
      return filterApp(this.menu, AppCategory.Collaboration);
    },
    getMultiDomainSimulation() {
      return filterApp(this.menu, AppCategory.MultiFieldSimulation);
    },
    // 分布式仿真
    getDistributedSimulation() {
      return filterApp(this.menu, AppCategory.DistributedSimulation);
    }
  },
  actions: {
    setMenus(menus) {
      // 只有YSSIM 平台 时所必须的，根据platform 进行过滤
      this.menu = menus.filter(
        item => item.appTag && item.appTag === 'platform'
      );
    },
    setRoles(roles) {
      this.roles = roles;
    },
    setPermissions(permissions) {
      this.permissions = permissions;
    },
    async getPermission() {
      const perssions = await getPermissionInfo();
      const userStore = useUserStore();
      userStore.upadteUser(perssions.data.user);
      this.setRoles(perssions.data.roles);
      this.setMenus(perssions.data.menus);
      this.setPermissions(perssions.data.permissions);
      storeUserPerssion2Local();
      setupGloal();
    }
  }
});
