# 故障排除

如果你在启动 Aseprite 时遇到问题（例如，它启动后立即关闭），你可以尝试：

1. [重置你的首选项](reset-preferences.md)
1. 使用[调试选项](debug.md)，这将生成一个 `Aseprite-v1.2-DebugOutput.txt` 文件
1. 仅限 Windows：检查生成的 `Aseprite-v1.2-DebugOutput.txt` 文件的最后一行是否显示：
   `PEN: Wintab library loaded`。如果是这种情况，请尝试[禁用 Wintab](wintab.md)。
1. 在其他情况下，请将 `Aseprite-v1.2-DebugOutput.txt` 文件发送至 [support@aseprite.org](mailto:support@aseprite.org) 与我们联系。

你也可以在以下论坛中查找你的问题：

* [Aseprite 社区](https://community.aseprite.org)
* [Steam 一般讨论论坛](http://steamcommunity.com/app/431730/discussions/0/)
* [Steam 错误报告论坛](http://steamcommunity.com/app/431730/discussions/2/)
* [GitHub 上已关闭的错误](https://github.com/aseprite/aseprite/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aclosed%20%20label%3Abug)

## 崩溃/数据丢失

如果发生崩溃，你或许能够[恢复一些精灵](data-recovery.md)。

## 平板问题

如果你的平板（或平板的压力）不起作用，
请检查 [平板](tablet.md) 页面。

## macOS 渲染问题

Aseprite 在 macOS 上使用异步渲染（[CALayer 的 drawsAsynchronously](https://developer.apple.com/documentation/quartzcore/calayer/1410974-drawsasynchronously?language=objc)）。
从 Aseprite v1.2.20 开始，如果你遇到了一些问题，例如屏幕上出现黑色矩形，就可以禁用此功能（不过，如果你使用了像 Display P3 这样的[颜色配置文件](color-profile.md)，性能将会显著下降）。

要禁用此功能：
1. 关闭 Aseprite
2. 打开[首选项文件夹](preferences-folder.md)中的 `aseprite.ini` 文件
3. 查找 `[general]` 部分并添加此选项 `osx_async_view = false`

---

**参阅**
[重置首选项](reset-preferences.md) |
[数据恢复](data-recovery.md) |
[调试](debug.md) |
[平板](tablet.md)
