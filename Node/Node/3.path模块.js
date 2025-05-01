// 引入path模块
const path = require("path");
// 获取当前绝对路径
const currentDir = __dirname;
console.log("当前绝对路径：", currentDir);
// 安全拼接路径
const currentPath = path.join(currentDir, "3.path模块.js");
console.log("安全拼接路径：", currentPath);
// 解析路径
const parsePath = path.parse(currentPath);
console.log(parsePath);