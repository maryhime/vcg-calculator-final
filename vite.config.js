import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // build: {
    //     minify: process.env.APP_ENV === 'production' ? 'esbuild' : false,
    //     cssMinify: process.env.APP_ENV === 'production',
    // },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/main.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
