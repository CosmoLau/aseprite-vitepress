<p align="center">English | <a href="./README.zh.md">简体中文</a></p>

# Aseprite Unofficial Documentation

aseprite-vitepress is a project that ports the official Aseprite documentation using VitePress. It has excellent multilingual support and is expanded based on the official documentation repository, making it easy to update the documentation at any time.

# Adding a New Language

1. Clone this repository

> [!IMPORTANT]
> This repository contains submodules. You need to use the `git clone --recurse-submodules` command to clone it.

```bash
git clone --recurse-submodules https://github.com/aseprite-vitepress/aseprite-vitepress.git
```

2. Copy the `en` directory to a new language directory
3. Translate the `index.md` file in the directory
4. Add configuration file similar to `zh/config.mts` to the new language directory
5. Translate sidebar and navigation bar contents in the `config.mts` configuration file
6. Submit a PR
