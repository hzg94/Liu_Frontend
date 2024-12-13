import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {PrimeVueResolver} from "@primevue/auto-import-resolver";
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
