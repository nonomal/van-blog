<p align="center">
	<img src="/img/logo.svg" style="width: 200px"></img>
</p>
<p align="center">
	<strong>VanBlog 是一款简洁实用的个人博客系统。支持 HTTPS 证书全自动按需申请、黑暗模式、移动端自适应和评论，内置流量统计与图床，内嵌评论系统，配有完备的、支持黑暗模式、支持移动端、支持一键上传剪切板图片到图床、带有强大的编辑器的后台管理面板。</strong>
</p>
<p align="center">
  <img src="https://img.shields.io/github/v/release/mereithhh/van-blog?display_name=tag" />
  <img src="https://img.shields.io/github/stars/mereithhh/van-blog" />
  <img src="https://img.shields.io/bitbucket/issues/mereithhh/van-blog" />
  <img src="https://github.com/mereithhh/van-blog/workflows/release/badge.svg" />
  <img src="https://img.shields.io/badge/license-GPL%20v3-yellow.svg" />
</p>
<p align="center">
	<strong>项目主页: </strong>  <a target="_blank" href='https://vanblog.mereith.com'>vanblog.mereith.com</a>
</p>
<p align="center">
	<strong>Demo(后台账号密码均为 demo): </strong>  <a target="_blank" href='https://blog-demo.mereith.com'>blog-demo.mereith.com</a>
</p>

## 预览图

![前台-白色](/img/前台-白色.png)
![前台-黑色](/img/前台-黑色.png)
![后台-白色](/img/后台-白色.png)
![后台-黑色](/img/后台-黑色.png)

## 特性

- [x] 独一份的按需全自动 HTTPS，甚至不用填域名。
- [x] 包括完整的前后台和服务端。
- [x] 前台和后台都为响应式设计，完美适配移动端和多尺寸设备。
- [x] 前台和后台都支持黑暗模式，并可自动切换。
- [x] 前台为静态网页（SSG），并支持秒级的增量渲染，每次改动无需重新构建全部页面。
- [x] SEO 和无障碍友好。
- [x] 静态网页，CDN 友好。
- [x] 版本号展示和更新提醒。
- [x] 基于 React，项目工程化，二次开发友好。
- [x] 内置强大的分析功能，可统计访客等数据。并配有精美看板。
- [x] 内嵌评论系统。
- [x] 强大的 markdown 编辑器，一键插入 more 标记，一键剪切板及本地图片上传，
- [x] TOC、草稿、代码复制、访客数、评论数、分类、标签、搜索、加密、友链、打赏、自定义导航栏。
- [x] 多个布局设置，可自定义页面细节。
- [x] 内置图床，并支持各种 OSS 图床、github 图床（外部图床基于 picgo）等。
- [x] 极致轻量化，没有花里胡哨。页面秒切换、图片懒加载。
- [x] docker 一键部署
- [x] 支持 GA、百度分析
- [x] 简单易用的后台，支持数据的导出与导入。
- [x] 完善的 API，完全利用本项目后台和服务端，自己写前端或适配其他页面生成器
- [x] 有较完善的日志记录，后台可直接查看登录日志和 Caddy 日志。

## 快速上手

请移步项目文档：[快速上手](https://vanblog.mereith.com/guide/docker.html)

## 说明与文档

请移步项目主页： [https://vanblog.mereith.com](https://vanblog.mereith.com)

## CHANGELOG

[CHANGELOG](CHANGELOG.md)

## 谁在用

目前就我自己- -

- [Mereith's Blog](https://www.mereith.com)

## 开发计划

- [x] 精简打包体积
- [x] 集成 HTTPS 和自动证书申请续期
- [x] 后台增加登录日志
- [x] 内嵌评论系统
- [ ] 精简配置项，尽可能移动到运行时配置
- [ ] 增加批量导入 md 文件功能
- [ ] 精简前台 js 体积，优化性能
- [ ] 增加一些 e2e 测试，集成到 CI

## 问题反馈

请提 `issue` ，如无特殊情况会在一天内解决。

## Star 趋势图

[![Stargazers over time](https://starchart.cc/Mereithhh/van-blog.svg)](https://starchart.cc/Mereithhh/van-blog)
