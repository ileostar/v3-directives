# v3-directives Open Source Guide

## How to develop a new instruction

If you do not understand the custom instructions, you can first read the official documentation [👉custom instructions development](https://vuejs.org/guide/reusability/custom-directives.html)

## Project directory structure

```txt
├── .github
├── .vscode
├── docs
│   ├── .vitepress        // vitepress config
│   ├── en                // English
│   ├── public
│   ├── zh                // Chiners
│   └── index.ts
├── src
│   ├── directive         // All Directives
│   ├── utils             // tools functions
│   └── index.ts
├── .gitignore            // git ignore files
├── LICENSE
├── .editorconfig         // IDE config
├── .npmrc                // npm config
├── netlify.toml          // netlify deploy config
├── eslint.config.ts      // ESLint config
├── package.json          // Project configuration
├── tsup.config.ts        // tsup config
├── README.md             // Project description document
└── tsconfig.json
```

## Add new instruction

The directive is added in `src/directive` and then exported in src/index.ts

## Document maintenance

The document is maintained in the `docs` directory, and remember to update the internationalized document if you add new instructions

<style scoped>
a {
  text-decoration: none;
}
</style>
