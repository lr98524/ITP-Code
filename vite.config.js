// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/ITP-Code/",
    build: { 
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                backgroundcc: resolve(__dirname, "backgroundcc.html"),
                palindrome: resolve(__dirname, "palindrome.html"),
                romannumeral: resolve(__dirname, "romannumeral.html"),
            },
        },
    },
});