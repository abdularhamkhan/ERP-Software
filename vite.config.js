import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/, // Handle .jsx files only
    exclude: /(data|style|client|utils)\.js/, // Exclude these files
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Treat .js files as JSX
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Path alias setup
    },
  },
  server: {
    historyApiFallback: true, // Ensure fallback for SPA routes
  },
});
