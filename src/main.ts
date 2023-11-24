import { createApp } from 'vue';
//加载样式文件
import 'nprogress/nprogress.css';
import '@/styles/index.scss';
import App from './App.vue';
import ElementPlus from 'element-plus';
import { setupRouter } from './router';
import { userPina } from './store';

import 'virtual:svg-icons-register';
async function bootstrap() {
  const app = createApp(App);
  userPina(app);
  setupRouter(app);
  app.use(ElementPlus);
  app.mount('#app');
}

bootstrap();
