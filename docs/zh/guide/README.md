---
pageClass: getting-started
---

# 介绍
本文是对kubernetes 1.16.0版本文档的翻译
:::tip 建议
本项目的定位是后台集成方案，不太适合当基础模板来进行二次开发。因为本项目集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不关注这方面的问题，也可以直接基于它进行二次开发。

- 基础篇 搭建本地基础的Kubernetes即MiniKube [![vue](/images/icons/eye.svg)](/zh/guide/k8s/start)
- 进阶篇 对k8s容器的编排<a href="/zh/guide/k8s/start">进入</a>
- 运维篇 运维需要关心的
- Typescript 版: [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (鸣谢: [@Armour](https://github.com/Armour))
- Others: [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)
  :::

<br/>

## 功能

<br/>

## 部署文档
安装本地的启动博客文章的代码
```bash
npm install --registry=https://registry.npm.taobao.org
# 本地开发 启动项目
npm run dev
```
<br/>

## 使用表情 <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank">Github列表</a>
### Emjoi :tada:
 :tada:
 :100:
 
## 使用外部链接的方式
```yaml
使用格式：[](url)
即：
[xxx](外部链接的url地址)
例如: 
[kubernetes DNS](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)
```
例如:[kubernetes DNS](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)

## 使用图片
```yaml
使用  ![](图片地址可以是本地图片url也可以是网络的图片url)
例如：
![使用图片](/logo.png)
下图就是上面的例子的展示结果↓
```
![使用图片](/logo.png)
 
