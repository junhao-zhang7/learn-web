1. 使用label标签好处：1 有利于A11Y 2 有利于文字聚焦对应输入框
2. 无action，使用的就是get方法，提交到本地URL
3. live sever只支持get静态文件
4. 不允许post，如使用，则报405错误
5. 
标准 HTTP 状态码详解（5 大类）
 
1xx 信息响应（临时响应，仅传输中间状态）
 
状态码 名称 含义与适用场景 
100 Continue 服务器已接收请求头，客户端可继续发送请求体（多用于 POST 大文件） 
101 Switching Protocols 服务器同意切换协议（如 HTTP 切换到 WebSocket） 
 
2xx 成功响应（请求被服务器正常处理并返回结果）
 
状态码 名称 含义与适用场景 
200 OK 通用成功，请求正常完成（GET/POST/PUT 等通用） 
201 Created 资源创建成功（多用于 POST 新增资源，响应体应返回新资源的 URL） 
202 Accepted 请求已接收，但尚未处理完成（异步任务，如后台生成报表） 
204 No Content 成功但无响应体（多用于 DELETE 删除资源，或 PUT 更新资源且无需返回数据） 
206 Partial Content 断点续传/分片下载成功（客户端请求  Range  头，服务器返回指定范围的数据） 
 
3xx 重定向响应（请求需要客户端进一步操作才能完成）
 
状态码 名称 含义与适用场景 
301 Moved Permanently 永久重定向（旧 URL 废弃，客户端应缓存新 URL） 
302 Found 临时重定向（旧 URL 仍可用，客户端不缓存新 URL） 
304 Not Modified 资源未修改（客户端缓存有效，直接使用本地缓存，无需重新下载） 
307 Temporary Redirect 临时重定向（严格保留请求方法，如 POST 不会转为 GET） 
308 Permanent Redirect 永久重定向（严格保留请求方法） 
 
4xx 客户端错误（请求存在错误，服务器无法处理）
 
状态码 名称 含义与适用场景 
400 Bad Request 通用客户端错误（请求语法错误、参数格式错误、JSON 解析失败） 
401 Unauthorized 未授权（客户端未提供身份凭证，或凭证无效，需登录） 
403 Forbidden 禁止访问（身份凭证有效，但用户无权限操作该资源） 
404 Not Found 资源不存在（请求的 URL 对应的资源未找到） 
405 Method Not Allowed 请求方法不被允许（如用 POST 请求仅支持 GET 的接口） 
406 Not Acceptable 服务器无法返回客户端请求的  Accept  格式（如客户端要 JSON，服务器只有 XML） 
408 Request Timeout 请求超时（客户端发送请求过慢，服务器主动断开连接） 
409 Conflict 资源冲突（如 POST 新增用户时，用户名已存在） 
413 Payload Too Large 请求体过大（如上传的文件超过服务器限制） 
415 Unsupported Media Type 请求体格式不支持（如客户端发送 XML，服务器仅支持 JSON） 
429 Too Many Requests 客户端请求频率过高（触发限流，需等待后重试） 
 
5xx 服务器错误（服务器处理请求时发生内部错误）
 
状态码 名称 含义与适用场景 
500 Internal Server Error 通用服务器错误（服务器代码异常、数据库连接失败等未知错误） 
501 Not Implemented 服务器未实现该请求功能（如请求的接口尚未开发） 
502 Bad Gateway 网关错误（服务器作为网关，收到上游服务器的无效响应） 
503 Service Unavailable 服务不可用（服务器维护、过载，暂时无法处理请求） 
504 Gateway Timeout 网关超时（服务器作为网关，等待上游服务器响应超时） 
505 HTTP Version Not Supported 服务器不支持客户端使用的 HTTP 版本 
6. 命名法	适用场景
小驼峰		变量、函数、参数、JSON 字段（首字母小写，其余大写）
大驼峰		类、接口、组件、枚举（首字母全大写）
蛇形命名		Python 变量/函数、数据库字段、配置项（下划线连接，user_name）
烤肉串命名		HTML 标签属性、URL 路径、CSS 类名(user-name)
7. get and post
   get:查询/获取数据
   post:提交/修改数据
1. 数据传递：GET把参数拼在URL地址后（可见）；POST把参数放在请求体中（不可见）。
2. 数据大小：GET受URL长度限制（一般几KB）；POST无明确大小限制，可传大文件/大量数据。
3. 请求性质：GET是幂等性请求（多次请求结果一致，如查数据）；POST非幂等（多次请求可能产生不同结果，如提交表单、创建数据）。
4. 缓存/历史：GET请求可被浏览器缓存、记录在历史记录；POST不会被缓存，历史中无参数记录。
5. 安全性：GET参数明文暴露，不适合传敏感信息（密码/身份证）；POST参数隐藏，安全性更高（仍需加密做高安全场景）。
 
适用场景
 
- GET：查询/获取数据（如搜索、翻页、查看详情）。
- POST：提交/修改数据（如注册登录、提交表单、上传文件、支付）。