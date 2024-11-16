import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VUE_APP_BASE_URL': JSON.stringify(env.VUE_APP_BASE_URL)
    },
    plugins: [vue()],
  }
});