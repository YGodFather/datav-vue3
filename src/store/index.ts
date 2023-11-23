import { createPinia } from 'pinia';
import type { App } from 'vue';
export * from './modules/user';
export * from './modules/permission';
export * from './modules/config';

const pinia = createPinia();

export function userPina(app: App) {
  app.use(pinia);
}
