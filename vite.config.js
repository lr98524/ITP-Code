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
                about: resolve(__dirname, "about/index.html"),
                backgroundcc: resolve(__dirname, "backgroundcc/index.html"),
                backgroundccstyle: resolve(__dirname, "backgroundcc/style.css"),
                backgroundccjs: resolve(__dirname, "backgroundcc/script.js"),
                palindrome: resolve(__dirname, "palindrome/index.html"),
                romannumeral: resolve(__dirname, "romannumeral/index.html"),
                romannumeraljs: resolve(__dirname, "romannumeral/script.js"),
            },
        },
    },
});