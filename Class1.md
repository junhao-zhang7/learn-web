Class 1
The use of github
1 create new repository//创建仓库
   1. choose visibility(public/private)//开源0r私人
   2. add.gitignore(node)//忽视一些文件
   3. add license(GNU)//公共许可证
The use of vscode
1 uninstall some useless extensions
2 settings.json
  1 "editor.fontSiza":13//代码字体大小
  2 "terminal.integrated.fontSize":13//终端字体大小
The use of git
1 node -v//加空格
2 git clone "https   "//使用git上传项目
Class 2
Attention:
***After completing each step,please enter "git status" to observe the state of file.
Steps:
1. git status:
   You will see the files are untracked.(red)
   ## 此时文件位于working Directory
2. git add .+git status:
   You will see the files are tracked.(green)
   ## 将目录下所有未被跟踪或已修改的文件添加到Git的暂存区（Staging Area）
3. git commit -m "XXX(你做了什么)"+git status:
   ## 将暂存区的内容提交到本地Git仓库，并附带一条提交说明。（local repo）
4. git pull:
   ## 拉取并合并远程代码
5. git push+git status:
   ## 推送本地代码到远程

   

