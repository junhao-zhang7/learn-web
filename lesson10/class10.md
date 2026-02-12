1. npm init  核心解析
    npm init  是初始化Node.js项目的核心命令，会引导你生成项目的核心配置文件  package.json （项目的「身份证」），无该文件则无法使用 npm install 安装依赖，是创建Node.js/npm项目的第一步。
2. npm install express
   npm install express  核心解析

该命令用于给Node.js项目安装Express框架（Node.js最主流的Web开发框架），安装后会自动完成3件事：

1. 将 express 添加到 package.json 的 dependencies （生产依赖）；
2. 在项目根目录生成/更新 package-lock.json ，锁定express及所有间接依赖的精确版本；
3. 在 node_modules 中下载express源码及所有依赖包。
4. // 1. 导入 Express 框架模块，这是创建 Express 服务的基础
const express = require("express")

// 2. 创建 Express 应用实例，后续所有的路由、中间件配置都基于这个实例
const app = express();

// 3. 定义服务监听的端口号，常量形式定义便于后续修改和维护
const PORT = 3000;

// 4. 注册静态文件中间件：将项目根目录下的 "public" 文件夹设为静态资源目录
// 客户端可以直接访问该文件夹下的文件（如 http://localhost:3000/index.html）
app.use(express.static("public"))

// 5. 启动 HTTP 服务，监听指定端口
app.listen(PORT, () => {
// 6. 服务启动成功后执行的回调函数，打印提示信息
console.log("当前服务运行在3000端口号")
})
