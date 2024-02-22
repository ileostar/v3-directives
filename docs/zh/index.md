---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "V3-Directives"
  text: "Vue3 自定义指令库"
  tagline: 使 Vue3 开发过程更加简单和高效
  actions:
    - theme: brand
      text: 起步
      link: /zh/guide/start
    - theme: alt
      text: 指令预览
      link: /zh/guide/directives.html#所有指令
    - theme: alt
      text: 前往 Github
      link: https://github.com/ileostar/v3-directives
  image:
    src: /logo.svg
    alt: v3-directives

features:
  - title: Vue3 支持
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.16em" height="1em" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
    details: 支持最新的Vue3。
  - title: 可交互样例
    icon: 🎪
    details: 交互式演示使用更加容易。
  - title: 完全可树摇
    icon: ⚡
    details: 只用你想要
---

<style>
.image-src[alt="v3-directives"] {
    max-width: 160px;
    max-height: 160px;
}

@media (min-width: 640px) {
  .image-src[alt="v3-directives"] {
      max-width: 200px;
      max-height: 200px;
  }
}

@media (min-width: 960px) {
  .image-src[alt="v3-directives"] {
      max-width: 340px;
      max-height: 340px;
  }
}
</style>
