console.log("Hello Node");
// 导入自定义模块-CommonJS
// const XDXZ = require("./5.自定义模块-CommonJS.js");
// 导入自定义模块-ECMAScript
// import XDXZ from "./6.自定义模块-ECMAScript.js"
// console.log(XDXZ.str);
// console.log(XDXZ.arr);
// XDXZ.fn();
// 按需导入
import { str, arr, fn} from "./6.自定义模块-ECMAScript.js"
console.log(str);
console.log(arr);
fn();