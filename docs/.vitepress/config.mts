import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "v3-directives",
  description: "Custom Vue3 directives",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lastUpdated: true,
  ignoreDeadLinks: 'localhostLinks',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/ileostar">ileostar</a>'
    },

    lastUpdated: {
      text: '本页更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search document',
                buttonAriaLabel: 'Search document'
              },
              modal: {
                noResultsText: 'No results could be found',
                resetButtonTitle: 'Clear query criteria',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Toggle'
                }
              }
            }
          },
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ileostar/v3-directives' }
    ],

    i18nRouting: true
  },
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  }
})
