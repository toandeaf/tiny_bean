import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tsconfigPaths()],
  base: command === 'build' ? '/static/' : '',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      // Treat `src` as the base directory for imports
      '/': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
}))
