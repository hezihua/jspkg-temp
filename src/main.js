/*
* src/main.js:
*/
import foo from './foo.js';
export var name = '张三';
export function getName() {
    return `获取的名字为：${name}, ${foo}`;
}
