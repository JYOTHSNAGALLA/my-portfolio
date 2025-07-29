// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-username' and 'repo-name' with your GitHub details
export default defineConfig({
  base: 'my-portfolio',
  plugins: [react()],
});
