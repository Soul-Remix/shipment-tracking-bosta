import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shipment-tracking-bosta/",
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
