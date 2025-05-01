// 引入http模块
const http = require("http");
// 创建Web服务对象
const server = http.createServer();
// 监听事件
server.on("request", (request, result) => {
    // 设置响应头
    result.setHeader("Content-Type", "text/plain; charset=utf-8");
    // 设置响应体内容
    result.end("Node创建的Web服务");
});
// 配置端口启动服务
server.listen(3000, () => {
    console.log("Web服务已启动：http://localhost:3000");
});