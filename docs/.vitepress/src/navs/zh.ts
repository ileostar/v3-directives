export default function getNavs() {
  return [
    { text: '指南', link: '/zh/guide/introduce' },
    {
      text: '所有指令',
      link: '/zh/guide/directives.html#所有指令',
    },
    {
      text: '参与开源',
      items: [
        {
          text: '贡献',
          items: [
            { text: '开发指南', link: '/zh/about/contribution' },
          ],
        },
        {
          text: '关于',
          items: [{ text: '开发团队', link: '/zh/about/team' }],
        },
      ],
    },
  ]
};
