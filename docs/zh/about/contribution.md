# v3-directives 开源指南

## 如何开发一个新指令

如果不了解自定义指令可以先阅读官方文档
[👉自定义指令开发](https://cn.vuejs.org/guide/reusability/custom-directives.html)

## 项目目录结构
```txt
├── .github
├── .vscode
├── docs
│   ├── .vitepress        // vitepress配置
│   ├── en                // 国际化英文
│   ├── public
│   ├── zh                // 简体中文
│   └── index.ts
├── src
│   ├── directive         // 所有指令
│   ├── utils             // 工具函数
│   └── index.ts
├── .gitignore            // git忽视文件
├── LICENSE
├── .editorconfig         // IDE配置文件
├── .npmrc                // npm管理配置
├── netlify.toml          // netlify部署配置
├── eslint.config.ts      // ESLint配置
├── package.json          // 项目依赖配置文件
├── tsup.config.ts        // tsup配置文件
├── README.md             // 项目说明文件
└── tsconfig.json
```

## 添加新指令

指令添加在`src/directive`，然后在src/index.ts中导出即可

## 文档维护

文档维护在`docs`目录下，如果添加新指令记得更新国际化文档

<style scoped>
a {
  text-decoration: none;
}
</style>
