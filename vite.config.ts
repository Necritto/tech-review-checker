import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const MAX_CHUNK_SIZE = 200_000;

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
    build: {
        rolldownOptions: {
            treeshake: {
                moduleSideEffects: (id) => {
                    if (/remark|rehype/.test(id)) {
                        return true;
                    }

                    return undefined;
                },
            },
            output: {
                advancedChunks: {
                    minSize: 20_000,
                    groups: [
                        {
                            name: "markdown-vendor",
                            test: /node_modules[\\/](react-markdown|remark)/,
                            priority: 20,
                        },
                        {
                            name: "highlight-vendor",
                            test: /node_modules[\\/](rehype|highlight\.js)/,
                            priority: 15,
                        },
                        {
                            name: "react-vendor",
                            test: /node_modules[\\/]react/,
                            priority: 10,
                            maxSize: MAX_CHUNK_SIZE,
                        },
                        {
                            name: "vendor",
                            test: /node_modules/,
                            priority: 5,
                            maxSize: MAX_CHUNK_SIZE,
                        },
                    ],
                },
            },
        },
    },
});
