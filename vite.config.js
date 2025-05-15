import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base:'/my-first-svelte-app/',
  resolve: {
    alias: {
      "$components": path.resolve('/my-first-svelte-app/src/components'),
      "$data": path.resolve("/my-first-svelte-app/src/data"),
      "$routes": path.resolve("/my-first-svelte-app/src/routes"),
    }
  }
})
