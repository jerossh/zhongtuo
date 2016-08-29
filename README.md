# zhongyukuaiji

## git 命令帮助
第一次要这样子
```
echo "# zhongyukuaiji" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:jerossh/zhongyukuaiji.git
git push -u origin master
```
后续的命令是
```
git push origin master
```
##git add 的实用命令
```
    -n, --dry-run         dry run
    -v, --verbose         be verbose      // 打印版本

    -i, --interactive     interactive picking
    -p, --patch           select hunks interactively
    -e, --edit            edit current diff and apply
    -f, --force           allow adding otherwise ignored files
    -u, --update          update tracked files
    -N, --intent-to-add   record only the fact that the path will be added later
    -A, --all             add changes from all tracked and untracked files
    --ignore-removal      ignore paths removed in the working tree (same as --no-all)
    --refresh             don't add, only refresh the index
    --ignore-errors       just skip files which cannot be added because of errors
    --ignore-missing      check if - even missing - files are ignored in dry run
```
## git排除文件
在工程根目录下建立.gitignore文件，将要排除的文件或目录 写到.gitignore这个文件中
```
*.class
*.apk
bin/
gen/
.settings/
proguard/
```
