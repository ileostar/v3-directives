import { defineConfig } from 'vitepress'
import { docsConfig } from "./src/docs";

import { themeConfig } from "./src/theme";
import { head } from "./src/head";
//配置的英文文档设置

import { enConfig } from './src/configs/en'

//配置的中文文档设置

import { zhConfig } from './src/configs/zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  /* 标头配置 */
  head,
  /* 文档配置 */
  ...docsConfig,
  /* 主题配置 */
  themeConfig,
  /* 语言配置 */
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/index',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...enConfig
    }
  }
})
