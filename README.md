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

:::tip 注意
提交项目的访问路径需要和你在GitHub上创建的名称一致
:::
```js(4)
module.exports = {
  title: '搭建学习K8S的文档',
  description: '记录学习的信息',
  base: '/my-k8s-doc/',
  dest: './dist',
  port: '8888',
  head: [
      ['link', {rel: 'icon', href: '/logo.png'}]
  ],
```