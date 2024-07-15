import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_3d_portfolio/',
  plugins: [react()],
});
