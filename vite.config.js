import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // comprendre le JSX React
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"), // point d'entrée du package
      name: "modal-mtdev2024", // nom global pour le format UMD
      fileName: "modal-mtdev2024", // nom des fichiers générés dans dist/
    },
    rollupOptions: {
      external: ["react", "react-dom", "prop-types"], // pas inclus dans le bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "prop-types": "PropTypes",
        },
      },
    },
  },
});
