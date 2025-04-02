// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ITP-Code/",
  root: "src",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        main: "src/index.html",
        about: "src/demos/about.html",
        backgroundcc: "src/demos/backgroundcc.html",
        palindrome: "src/demos/palindrome.html",
        romannumeral: "src/demos/romannumeral.html",
        todolist: "src/demos/todolist.html",
        telephone: "src/demos/telephone.html",
        mvp: "src/demos/mvp.html",
      },
    },
  },
});
