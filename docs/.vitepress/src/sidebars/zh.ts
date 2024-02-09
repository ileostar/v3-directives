export const sidebar = {
  '/zh/': [
    {
      text: "指南",
      items: [
        { text: "简介", link: "/zh/guide/introduce", activeMatch: '/zh/guide/' },
        { text: "快速起步", link: "/zh/guide/start" },
      ],
    },
    {
      text: "所有指令",
      items: [
        { text: "v-copy", link: "/zh/directives/v-copy" },
        { text: "功能", link: "/zh/examples/introduction/build" },
      ]
    }
  ],
  '/zh/about/': [
    {
      text: "贡献",
      items: [
        { text: "开发指南", link: "/zh/about/contribution" }
      ],
    },
    {
      text: "关于",
      items: [
        { text: "开发团队", link: "/zh/about/team" }
      ],
    }
  ]
};
