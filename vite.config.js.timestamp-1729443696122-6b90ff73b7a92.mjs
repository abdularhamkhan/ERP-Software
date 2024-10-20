// vite.config.js
import path from "node:path";
import react from "file:///home/arham/Desktop/SE/erp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///home/arham/Desktop/SE/erp/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/home/arham/Desktop/SE/erp";
var vite_config_default = defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /.*\.jsx?$/,
    // Handle .jsx files only
    exclude: /(data|style|client|utils)\.js/
    // Exclude these files
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
        // Treat .js files as JSX
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
      // Path alias setup
    }
  },
  server: {
    historyApiFallback: true
    // Ensure fallback for SPA routes
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hcmhhbS9EZXNrdG9wL1NFL2VycFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYXJoYW0vRGVza3RvcC9TRS9lcnAvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYXJoYW0vRGVza3RvcC9TRS9lcnAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGVzYnVpbGQ6IHtcbiAgICBsb2FkZXI6ICdqc3gnLFxuICAgIGluY2x1ZGU6IC8uKlxcLmpzeD8kLywgLy8gSGFuZGxlIC5qc3ggZmlsZXMgb25seVxuICAgIGV4Y2x1ZGU6IC8oZGF0YXxzdHlsZXxjbGllbnR8dXRpbHMpXFwuanMvLCAvLyBFeGNsdWRlIHRoZXNlIGZpbGVzXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgJy5qcyc6ICdqc3gnLCAvLyBUcmVhdCAuanMgZmlsZXMgYXMgSlNYXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksIC8vIFBhdGggYWxpYXMgc2V0dXBcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBoaXN0b3J5QXBpRmFsbGJhY2s6IHRydWUsIC8vIEVuc3VyZSBmYWxsYmFjayBmb3IgU1BBIHJvdXRlc1xuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLE9BQU8sVUFBVTtBQUNqUixPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFGN0IsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBLElBQ1QsU0FBUztBQUFBO0FBQUEsRUFDWDtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDTixPQUFPO0FBQUE7QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQTtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sb0JBQW9CO0FBQUE7QUFBQSxFQUN0QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
