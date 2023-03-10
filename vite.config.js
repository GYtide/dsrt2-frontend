import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/overview": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/data": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
      }
    }

  },
})
