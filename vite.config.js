import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { path } from 'path';

const __dirname = path.resolve(path.dirname(''));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'), // Alias para la carpeta components
    },
  },
})
