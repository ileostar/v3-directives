import type { DefaultTheme } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
  // https://vitepress.dev/reference/default-theme-config

  logo: '/logo.svg',

  // i18n路由
  i18nRouting: false,

  // 搜索配置（二选一）
  search: {
    // 本地离线搜索
    provider: "local",

    // 多语言搜索配置
    options: {
      locales: {
        /* 默认语言 */
        root: {
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询结果",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
        en: {
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search for Documents",
            },
            modal: {
              noResultsText: "Unable to find relevant results",
              resetButtonTitle: "Clear Query Results",
              footer: {
                selectText: "select",
                navigateText: "switch",
              },
            },
          },
        },
      }
    }
  },

  socialLinks: [
    { icon: 'x', link: 'https://twitter.com/030LeoStar' },
    { icon: 'github', link: 'https://github.com/ileostar/v3-directives' }
  ],

  footer: {
    message: 'Released under the MIT License.',
    copyright:
      'Copyright © 2024-present <a href="https://github.com/ileostar">ileostar</a>'
  },
};
