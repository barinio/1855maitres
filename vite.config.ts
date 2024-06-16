import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), sassDts()],
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]"
    }
  }
});
