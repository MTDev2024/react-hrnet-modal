import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // comprendre le JSX React
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"), // point d'entrée du package
      name: "modal-mtdev2024", // nom global pour le format UMD
      fileName: "modal-mtdev2024", // nom de base des fichiers générés dans dist/
    },
    rollupOptions: {
      external: ["react", "react-dom"], // React n'est PAS inclus dans le bundle
      output: [
        {
          format: "es", // format ES Module - pour Vite, Webpack et bundlers modernes
          entryFileNames: "modal-mtdev2024.js", // nom du fichier ES Module
          globals: {
            react: "React", // nom global de React
            "react-dom": "ReactDOM", // nom global de ReactDOM
          },
        },
        {
          format: "umd", // format UMD - pour compatibilité avec anciens projets
          name: "modal-mtdev2024", // nom global du package en UMD
          entryFileNames: "modal-mtdev2024.umd.cjs", // nom du fichier UMD
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});
