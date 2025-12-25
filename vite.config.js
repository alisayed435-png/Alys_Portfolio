import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        port: 5173,
        open: true,
    },
    build: {
        target: 'esnext',
        minify: 'esbuild',
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'framer': ['framer-motion'],
                },
            },
        },
        reportCompressedSize: false,
        chunkSizeWarningLimit: 1000,
    },
    esbuild: {
        drop: ['console', 'debugger'],
        legalComments: 'none',
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    },
});
