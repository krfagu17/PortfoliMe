import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';



const envFiles = {
  development: '.env.local',
  production: '.env.production',
};

dotenv.config({
  path: envFiles[process.env.NODE_ENV] || '.env',
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
