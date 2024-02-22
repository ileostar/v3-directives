import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'FloatingVue',
    },
    rollupOptions: {
      external: [
        'vue',
        '@floating-ui/dom',
      ],
      output: [
        {
          format: 'esm',
          globals: {
            vue: 'Vue',
            '@floating-ui/dom': 'FloatingUIDOM',
          },
        },
        {
          format: 'cjs',
          globals: {
            vue: 'Vue',
            '@floating-ui/dom': 'FloatingUIDOM',
          },
        }
      ],
    },
  },
  define: {
    // eslint-disable-next-line ts/no-var-requires, ts/no-require-imports
    VERSION: JSON.stringify(require('./package.json').version),
  },
})
