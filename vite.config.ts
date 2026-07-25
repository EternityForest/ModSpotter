import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'tf': ['@tensorflow/tfjs'],
          'plotly': ['plotly.js-dist-min']
        }
      }
    }
  },
  
  base: './',
  optimizeDeps: {
    include: ['@tensorflow/tfjs', 'plotly.js-dist-min']
  }
});