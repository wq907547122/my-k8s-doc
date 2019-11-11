# 项目说明
:::tip 说明
使用的文档地址:
<br/>
https://www.cnblogs.com/LHLVS/p/11376732.html
:::

```sh
执行步骤：
1. 新切一个gh-pages(名字随意)
git checkout -b gh-pages

2. 先删除除了 .git、node_module、dist、 .gitignore之外的文件
再把dist文件夹小的所有文件剪切到根目录
3. 删除dist文件夹
4. git add -A
5. git commit -m 'deploy'
6. git push --set-upstream origin gh-pages
7. git push

```