<h1 align="center">vue3-fast-admin</h1>

<p align="center">
    <a href="https://github.com/whenTheMorningDark/vue3-admin/"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://whenthemorningdark.github.io/vue3-admin/#/dashboard">在线预览</a>
    ·
    <a href="https://github.com/whenTheMorningDark/vue3-admin/issues">提出Bug</a>
    ·
    <a href="https://github.com/whenTheMorningDark/vue3-admin/issues">提出建议</a>
  </p>

## 简介

`vue3-fast-admin` 是一款开源开箱即用的中后台管理系统。基于 `Vue3`、`Vite`、`Element-Plus`、`TypeScript`、`Pinia` 等主流技术开发，内置许多开箱即用的组件，能快速构建中后台管理系统，目前决定完全开源，如果觉得该项目对你有所帮助，可以点一个 star。！

## 测试账号

```

1.  用户名：admin  密码 任意  拥有admin的权限可以查看所有页面
2.  用户名：test   密码 任意  拥有test的页面权限，可以查看部分页面
3.  用户名：editor 密码 任意  拥有editor的页面权限，可以查看富文本等页面

```

## 预览

- [点我预览](https://whenthemorningdark.github.io/vue3-admin/#/dashboard)

- 暗黑模式

## 架构清单

- Vue3
- Vue-router
- Pinia
- Typescript
- Vite
- Axios
- 代码检测和格式化：eslint+prettier
- git 提交格式化：husky+lint-staged
- 代码日志规范：@commitlint/cli+@commitlint/config-conventional
- ...其他

## 功能

- 白天和暗黑模式切换,Echarts动态换肤
- 动态权限路由
- 自定义vite plugin 插件

### 文件目录说明

```
├── build                            ---vite打包配置
├── mock                             ---mock模拟数据
├── public                           ---静态资源文件
├── src
│  ├── api                           ---接口
│  ├── assets                        ---图片
│  ├── components                    ---可复用的vue组件
│  ├── constant                      ---常量
│  ├── directive
│  ├── enums
│  ├── hooks
│  ├── icons
│  ├── layouts                       ---布局方式
│  ├── plugins
│  ├── router                        ---路由
│  ├── store                         ---pinia
│  ├── styles                        ---scss样式
│  ├── utils                         ---方法函数
│  ├── views                         ---页面
│  ├── App.vue
│  ├── main.ts
├── types
├── .env
├── .env.development
├── .env.production
├── .eslintrc.js
├── .prettierrc.cjs
├──  package.json
├──  package-lock.json
├──  README.md
└──  vite.config.ts                 ---vite的配置

```

## 安装

```
# 克隆项目
git clone https://github.com/whenTheMorningDark/vue3-admin.git
# 进入项目目录
cd vue3-admin
# 安装依赖
pnpm install
# 本地开发 启动项目
pnpm start
```

### 部署

```
# 打包项目
npm run build

# 打包大小分析
npm run report

# 预览
npm run preview
```

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器, 不支持 `IE`

## 支持

开源不易，若觉得这个项目对你有用，可以点个[star](https://github.com/whenTheMorningDark/vue3-admin)，欢迎提出建议和 bug
