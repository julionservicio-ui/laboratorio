import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// Configuración compatible con despliegues en Netlify y subrutas.
export default defineConfig({
  plugins: [solidPlugin()],
  base: './',
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  },
});
