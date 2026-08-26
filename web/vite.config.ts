import { defineConfig } from 'vite';
import { fresh } from '@fresh/plugin-vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  envDir: '../',
  server: {
    port: 5030,
    host: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
    ],
  },
  plugins: [fresh({}), tailwindcss()],
});
