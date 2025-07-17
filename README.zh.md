<p align="center"><a href="./README.md">English</a> | 简体中文</p>

# Aseprite 非官方文档

aseprite-vitepress 是使用 VitePress 对 Aseprite 官方文档进行移植的项目，他对多语言有很好的支持，且基于官方文档仓库进行扩建，方便随时更新文档。

## 克隆本仓库

> [!IMPORTANT]
> 本仓库包含子模块，需要使用 `git clone --recurse-submodules` 命令克隆。

```bash
git clone --recurse-submodules https://github.com/aseprite-vitepress/aseprite-vitepress.git
```

安装依赖

```bash
npm install
```

## 添加新的语言

1. 使用 `create` 脚本命令创建新的语言目录

```bash
npm run create <你的语言>
```

2. 在 `.vitepress/config.mts` 文件中添加新的语言配置

```diff
    locales: {
        root: { label: 'English' },
        zh: { label: '简体中文' },
        jp: { label: '日本語' },
+       <你的语言>: { label: '你的语言' },
    },
```

3. 对新建的语言文件夹中的内容进行翻译

## 检查文档更新

使用 `check` 命令检查文档是否有更新

```bash
npm run check <需要检查的语言文件夹>
```

如果有更新，会提示你是否复制文件

```bash
Do you want to copy these files? (y/n):
```

## 开发者调试

使用 `vitepress` 进行开发者调试

```bash
npm run docs:dev
```

## 构建并预览

使用 `vitepress` 进行构建并预览

```bash
# 构建
npm run docs:build
# 预览
npm run docs:preview
```

## 提交 PR

如果构建预览没有问题，就可以提交 PR 了。
