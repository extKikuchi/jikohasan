// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-ocr-prototype/',  // ここをリポジトリ名に合わせる
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
});

