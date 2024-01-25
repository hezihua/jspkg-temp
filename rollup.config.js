import resolve from "@rollup/plugin-node-resolve";
import { uglify } from 'rollup-plugin-uglify';
import babel from "rollup-plugin-babel";
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: "src/main.js",
    output: [
        {
            file: "dist/js/main.umd.js",
            format: "umd",
            name: 'bundle-name'
        },
        {
            file: "dist/js/main.es.js",
            format: "es"
        },
        {
            file: "dist/js/main.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [
        uglify(),
        babel({
            exclude: 'node_modules/**', // 为了避免转译第三方脚本,我们需要设置一个 
        }),
        resolve({
            jsnext: true, // jsnext 表示将原来的 node模块转化成 ES6模块, main和 browser
            main: true,   // 则决定了要将第三方模块内的哪些代码打包到最终文件中。
            browser: true,
        }),
        commonjs(),
    ],
  };
  