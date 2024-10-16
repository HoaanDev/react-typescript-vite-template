import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      port: 3000,
   },
   css: {
      devSourcemap: true,
   },
   resolve: {
      alias: {
         '@src': path.resolve(__dirname, './src'),
      },
   },
});
