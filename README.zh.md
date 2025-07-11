<p align="center"><a href="./README.md">English</a> | 简体中文</p>

# Aseprite 非官方文档

aseprite-vitepress 是使用 VitePress 对 Aseprite 官方文档进行移植的项目，他对多语言有很好的支持，且基于官方文档仓库进行扩建，方便随时更新文档。

# 添加新的语言

1. 克隆本仓库

> [!IMPORTANT]
> 本仓库包含子模块，需要使用 `git clone --recurse-submodules` 命令克隆。

```bash
git clone --recurse-submodules https://github.com/aseprite-vitepress/aseprite-vitepress.git
```

2. 复制 `en` 目录到新的语言目录
3. 翻译目录中的 `index.md` 文件
4. 仿照 `zh/config.mts` 配置文件添加到新的语言目录
5. 在 `config.mts` 配置文件中翻译侧边栏和导航栏等内容
6. 提交 PR
