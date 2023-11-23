/*
 * @Author: simtek/yangrui 17368465776@163.com
 * @Date: 2023-09-12 11:48:10
 * @LastEditors: simtek/yangrui 17368465776@163.com
 * @LastEditTime: 2023-11-01 14:19:09
 * @FilePath: \simtek-frontend\main-app\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: '',
  server: {
    port: 8010,
    proxy: {},
    open: true
  },
  // // 预处理 element-plus 实现别名
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/element/index.scss" as *;`
  //     }
  //   }
  // },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^micro-app/i.test(tag)
        }
      }
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: '可拖拽大屏'
        }
      }
    }),
    // 处理svg Icon https://www.viterc.cn/en/vite-plugin-svg-icons.html
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-first'
    }),
    // 浏览器兼容处理
    legacy({ targets: ['defaults', 'ie >= 11', 'chrome 74'] })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {}
});
