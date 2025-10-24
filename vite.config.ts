import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: `@use "${resolve(
                    __dirname,
                    "src/shared/styles/mixins"
                )}" as mixins;`,
            },
        },
    },
    server: {
        port: 3000,
        host: "0.0.0.0",
    },
});
