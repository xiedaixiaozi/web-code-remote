// 引入fs模块
const fs = require("fs");
// 设置要操作的文件路径
const filePath = "./textFile.txt";
// 设置要写入的内容
const content = "Hello Node File System";
// 异步写入文件
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error("err:", err);
        return;
    } else {
        console.log("success");
    }
})
// 异步读取文件
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error("err:", err);
        return;
    } else {
        console.log("文件内容 (Buffer)：", data);
        console.log("文件内容 (字符串)：", data.toString());
    }
})