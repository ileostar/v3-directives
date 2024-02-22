import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// 引入以上配置 是英文界面需要修改zh为en

import getNavs from '../navs/en'

import { sidebar } from '../sidebars/en'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {

    lastUpdatedText: 'lastUpdated',
    returnToTopLabel: 'BackToTop',

    // 文档页脚文本配置
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    nav: getNavs(),

    sidebar,

    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: 'Directory', // 右侧大纲标题文本配置
    },

  },
}
