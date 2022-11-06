import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    outDir: path.resolve(__dirname, "docs"),
  },
});
