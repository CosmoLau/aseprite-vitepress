# 文件

Aseprite 使用多种文件格式来保存和加载不同的信息。你需要知道的主要一点是，当你使用 [*文件 > 保存* 菜单](save.md) 时，你的工作成果会保存在本地计算机中。
不涉及“云”或远程服务器功能，因此请记住备份你的工作成果，或者如果你想确保工作成果的安全，或在多台计算机之间共享，可使用类似云盘的文件夹服务，如 Dropbox、Google Drive、OneDrive 等。

## .aseprite

Aseprite 有自己的文件格式来 [保存](save.md) 你的作品：`.aseprite` 文件
（或 `.ase`，[两者相同](/faq/#is-there-any-difference-between-ase-and-aseprite-files)）。
当你将精灵保存为 `.aseprite` 文件时，你可以完整保留所有信息（[颜色模式](color-mode.md)、[图层](layers.md)、[帧](frames.md)、
调色板、[标签](tags.md)、[切片](slices.md) 等）。

通常，你会希望将作品 [导出](exporting.md) 为其他格式（`.png`、`.gif` 等），以便发布，或在游戏中使用这些资源。不过，请将原始的 `.aseprite` 文件保存在安全的地方，以便在需要时修改精灵。

这些文件的内部结构在 [Aseprite 文件格式规范](https://github.com/aseprite/aseprite/blob/main/docs/ase-file-specs.md) 中有详细说明。

## .aseprite-extension

你可以创建 `.aseprite-extension` 格式的扩展，它是一个包含特定文件集的 `.zip` 文件。有关更多信息，请参阅 [扩展](extensions.md) 页面中的 [文件内容](extensions.md#文件内容) 部分。

## .lua

位于 *文件 > 脚本 > 打开脚本文件夹* 文件夹中的脚本，用于 [脚本编写](scripting.md)。

## 首选项

[首选项](preferences.md) 会保存在 [首选项文件夹](preferences-folder.md) 中的多个文件里：

### aseprite.ini

*编辑 > 首选项* 对话框中指定的主要选项/配置都保存在此文件中。

### user.aseprite-brushes

自定义笔刷存储在此文件（XML 文件）中。未来，我们将提供更多选项，以便在不同文件之间导出/导入笔刷。

### user.aseprite-keys

你自定义的键盘快捷键存储在此文件中，并且在导出/导入键盘快捷键时，也会使用相同的 `.aseprite-keys` 文件格式（XML 文件）。

### sessions

`session` 文件夹包含一些用于 [数据恢复流程](data-recovery.md) 的备份文件。

---

**参阅**

[保存](save.md) |
[导出](exporting.md) |
[首选项](preferences.md) |
[Aseprite 文件格式规范](https://github.com/aseprite/aseprite/blob/main/docs/ase-file-specs.md)
