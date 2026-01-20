1. HTML 工作机制
   HTML（超文本标记语言）的核心工作机制是浏览器解析 HTML 代码，将其转化为可视化的网页，整个过程主要分为 3 个核心步骤：
   1.  请求与加载
   当你在浏览器地址栏输入网址并回车，浏览器会向目标服务器发送 HTTP/HTTPS 请求，服务器接收到请求后，会将对应的 HTML 文件（或动态生成的 HTML 内容）返回给浏览器。
   2.  解析与构建 DOM 树
   浏览器的 HTML 解析器会逐行读取 HTML 代码，使用UTF-8编码方式将代码转化为0/1字节流，将各类标签（如  <html> 、 <body> 、 <p> ）解析为 DOM 节点/token（文档对象模型节点），再按照标签的嵌套关系，构建出一棵 DOM 树。
   这个过程中，解析器遇到外部资源（如 CSS 文件、JavaScript 文件、图片）时，会并行发送请求去加载这些资源，同时继续解析 HTML。
   3.  渲染与显示

- 浏览器的 CSS 解析器会解析加载的 CSS 代码，生成 CSSOM 树（CSS 对象模型树）。
- 浏览器将 DOM 树和 CSSOM 树合并，生成渲染树，渲染树只包含需要显示的节点及对应的样式信息。
- 浏览器对渲染树进行布局（回流），计算每个节点的位置、大小等几何信息；随后进行绘制（重绘），将节点的颜色、字体、背景等视觉属性渲染到屏幕上。
- 若页面中存在 JavaScript 代码，JS 会通过 DOM API 或 CSSOM API 修改 DOM 树或 CSSOM 树，触发重新布局和绘制，实现页面的动态交互。

简单来说，HTML 是网页的骨架，浏览器通过“请求-解析-渲染”的流程，把纯文本的 HTML 代码变成了用户能看到、能交互的网页。 2. type="video/mp3"等:浏览器根据 MINE 类型判断是否支持，否则浪费性能（性能优化） 3. assets->资源文件夹 4. autoplay:不会自动播放（加上 muted（静音）可以）浏览器本身策略，保护心脏病等患者，只有点击确定才能打开音频。 5. preload="none":不予加载 auto：浏览器自行决定 metadata:加载元数据（如时长等） 性能优化 6. 一个 audio 只有一个播放器。多个 source 是兼顾浏览器的兼容性，当浏览器只支持 MP3，优先播放 MP3 格式的 audio 7. controlslist="nodownload noplaybackrate"无下载和 speed 按键 8. 关于 video
1- 多格式兼容写法（推荐）
由于不同浏览器对视频编码格式的支持存在差异，通常会搭配 <source> 标签提供多种格式的视频源，浏览器会自动选择第一个可播放的格式。
<video controls width="600" height="400" poster="cover.jpg">

  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogg" type="video/ogg">
  您的浏览器不支持 HTML5 video 标签，请升级浏览器。
</video>
2-分类 属性名 作用 
基础配置  src  指定视频文件的 URL（单独使用时） 
  width/height  设置视频播放器的宽度/高度（单位：像素），不设置则默认按视频原尺寸显示 
  poster  指定视频播放前显示的封面图 URL，未指定则显示视频第一帧 
功能控制  controls  布尔属性，添加后显示浏览器内置的播放控件（播放、暂停、进度条等） 
  autoplay  布尔属性，视频加载完成后自动播放（多数浏览器要求静音才能自动播放） 
  muted  布尔属性，设置视频默认静音播放 
  loop  布尔属性，设置视频播放结束后循环播放 
  preload  控制视频预加载策略，可选值： none （不预加载）、 metadata （仅预加载元数据）、 auto （自动预加载全部内容） 
  playsinline  布尔属性，设置视频在移动设备上内联播放（不自动全屏） 
  playsinline->防自动全屏
  ios->自动全屏操作
9.js中\\->\  \n->空格  \"->"(\为转义一字符)
<br>用作html中换行
