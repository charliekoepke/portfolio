import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        site: resolve(import.meta.dirname, "index.html"),
        components: resolve(import.meta.dirname, "components.html"),
      },
    },
  },
});
