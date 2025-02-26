// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    base: "/ITP-Code/",
    root: "src",
    build: { 
        outDir: "../docs",
        rollupOptions: {
            input: {
                main: 'src/index.html',
                about: 'src/indexes/about.html',
                backgroundcc: 'src/indexes/backgroundcc.html',
                palindrome: 'src/indexes/palindrome.html',
                romannumeral: 'src/indexes/romannumeral.html',
                todolist: 'src/indexes/todolist.html',
            },
        },
    },
});