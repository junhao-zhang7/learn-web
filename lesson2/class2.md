Class 2
Attention:
\*\*\*After completing each step,please enter "git status" to observe the state of file.
Steps:

1. git status:
   You will see the files are untracked.(red)
   此时文件位于 working Directory
2. git add .+git status:
   You will see the files are tracked.(green)
   将目录下所有未被跟踪或已修改的文件添加到 Git 的暂存区（Staging Area）
3. git commit -m "XXX(你做了什么)"+git status:
   将暂存区的内容提交到本地 Git 仓库，并附带一条提交说明。（local repo）
4. git pull:
   拉取并合并远程代码
5. git push+git status:
   推送本地代码到远程
   class3
6. 以‘/’开头表示从项目根目录开始匹配，否则会在项目内所有目录中搜索
7. 以‘/’结尾表示匹配文件夹，而不是同名文件
8. test.\*:忽略以 test 为名所有无论后缀名是什么的文件
9. 忽略某个文件夹下的 test 文件，应加上路径，如 path/test.\*
10. 通过！取消忽略，如！test（可覆盖前面内容）
11. 每个文件夹中的 gitignore 只会影响这个文件夹及其子目录
