powershell->直接控制CPU和GPU

1. pwd->显示目录的路径
2. ls->显示所有文件
3. cd (文件名)->进入下一个文件//cd 首字母+Tab+首字母+Tab
4. cd ~->切换到主目录
5. mkdir (文件名)->创建文件夹
6. cp 10.md 11.md//复制10.md并命名为11.md
7. cp -rm lesson10 lesson11//文件夹
8. rm 10.md//删除文件
9. rm -r lesson10//删除文件夹
10. mv lesson10/100.md lesson11//将lesson10里的100.md移动到lesson11里
11. <iframe>:在当前网页中嵌入另一个HTML页面
    src:外部资源URL
    width and height
    scrolling:控制iframe是否显示滚动条
    sandbox:用于限制iframe内内容的权限
    allowfullscreen:允许iframe内容进入全屏
    frameborder:控制iframe边框的显示，0表示无边框，1表示有边框
     loading="lazy":加载策略，滑到才加载
缺点：嵌套的网页有着独立的浏览器环境，会导致css调整困难