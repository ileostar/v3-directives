export default function getNavs() {
  return [
    { text: "指南", link: "/zh/guide/introduce" },
    { text: "所有指令", link: "/zh/directives/v-copy" },
    {
      text: "关于",
      items: [
        {
          text: "团队",
          link: "/zh/examples/about/team",
          activeMatch: "/zh/about/team",
        },
        {
          text: "常见问题",
          link: "/zh/examples/about/problem",
          activeMatch: "/zh/about/problem",
        },
      ],
      activeMatch: "/zh/examples/about/",
    },
  ]
};
