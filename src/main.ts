import { createApp } from 'vue';
//加载样式文件
import 'nprogress/nprogress.css';
import '@/styles/index.scss';
import App from './App.vue';
import ElementPlus from 'element-plus';
import { setupRouter } from './router';
import { userPina } from './store';
import { startMicroApp } from './micro-app/micro-app';
import { setupDirective } from './directives';
import 'virtual:svg-icons-register';
async function bootstrap() {
  startMicroApp();
  const app = createApp(App);
  userPina(app);
  setupDirective(app);
  setupRouter(app);
  app.use(ElementPlus);
  app.mount('#app');
}

bootstrap();
