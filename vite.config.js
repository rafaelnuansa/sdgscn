import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    ssr: {
        noExternal: ['react-share', 'lodash', '@uiw/react-md-editor', 'react-markdown', '@uiw/react-markdown-preview'],
    },
    optimizeDeps: {
        exclude: ['radix-ui/react-accordion'],
      }
});
