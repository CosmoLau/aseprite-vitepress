<p align="center">English | <a href="./README.zh.md">简体中文</a></p>

# Aseprite Unofficial Documentation

aseprite-vitepress is a project that ports the official Aseprite documentation using VitePress. It has excellent multilingual support and is expanded based on the official documentation repository, making it easy to update the documentation at any time.

## Clone this repository

> [!IMPORTANT]
> This repository contains submodules. You need to use the `git clone --recurse-submodules` command to clone it.

```bash
git clone --recurse-submodules https://github.com/aseprite-vitepress/aseprite-vitepress.git
```

Install dependencies

```bash
npm install
```

## Add a New Language

1. Use the `create` script command to create a new language directory

```bash
npm run create <your language>

# Or use other package managers, such as bun
# bun run create <your language>
```

2. In the `.vitepress/config.mts` file, add the new language configuration

```diff
    locales: {
        root: { label: 'English' },
        zh: { label: '简体中文' },
        jp: { label: '日本語' },
+       <your language>: { label: 'your language' },
    },
```

3. In the new language folder, translate the documentation

## Check for Documentation Updates

Use the `check` command to check if the documentation has been updated

```bash
npm run check <your language>
```

If there are updates, it will prompt you whether to copy the files

```bash
Do you want to copy these files? (y/n):
```

## Developer Debugging

Use `vitepress` for developer debugging

```bash
npm run docs:dev
```

## Build and Preview

Use `vitepress` for building and previewing

```bash
# build
npm run docs:build
# preview
npm run docs:preview
```

## Submit PR

If the build and preview are successful, you can submit a PR.
