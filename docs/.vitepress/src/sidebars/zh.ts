import { getFirstLevelFiles } from '../utils'

const directoryPath = './docs/zh/directives';
const subdirectories = getFirstLevelFiles(directoryPath).map((dirs:string)=> {
  return {
    text: dirs.slice(0,-3),
    link: `/zh/directives/${dirs.slice(0,-3)}`
  }
});

export const sidebar = {
  '/zh/': [
    {
      text: "指南",
      items: [
        { text: "简介", link: "/zh/guide/introduce", activeMatch: '/zh/guide/' },
        { text: "快速起步", link: "/zh/guide/start" },
        { text: "指令预览", link: "/zh/guide/directives" },
      ],
    },
    {
      text: "指令集",
      items: subdirectories
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
