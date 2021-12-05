import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@atoms': path.resolve(__dirname, './src/atoms/'),
      '@molecules': path.resolve(__dirname, './src/molecules/'),
      '@organisms': path.resolve(__dirname, './src/organisms/'),
      '@features': path.resolve(__dirname, './src/features/'),
    },
  },
})
