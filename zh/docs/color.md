# 色彩

本节介绍 Aseprite 如何管理颜色。

首先，你需要明白，特定的精灵（[新建的精灵](new-sprite.md) 或 [现有精灵](open.md)）具有三个属性，这些属性会影响精灵的编辑和查看方式：

* 精灵的[颜色模式](color-mode.md)
* [颜色配置文件](color-profile.md)
* 以及[透明颜色](transparent-color.md)
  （仅适用于[索引图像](color-mode.md#索引)）

除此之外，还有两种活动颜色可用于绘制或擦除精灵的部分内容：

* 当前活动的[前景色](color-bar.md#前景色)
* 当前活动的[背景色](color-bar.md#背景色)

## 颜色模式

一些调整和命令的工作方式会根据当前激活的颜色模式而有所不同。[RGB](https://en.wikipedia.org/wiki/RGB_color_model) 和 [索引](https://en.wikipedia.org/wiki/Indexed_color) 是互联网图像中最常用的两种模式。

你可以在 **[颜色模式](color-mode.md)** 章节中了解更多相关信息。

## 颜色配置文件

颜色配置文件指示图像的 RGB 值所基于的[颜色空间](https://en.wikipedia.org/wiki/Color_space)。它用于匹配不同设备（例如，你创建图像时使用的显示器，以及观看你图像的用户的显示器）间的 RGB 值。
互联网上的图像通常使用 [sRGB 颜色空间](https://en.wikipedia.org/wiki/SRGB)。

在 **[颜色配置文件](color-profile.md)** 章节中了解更多相关信息。

---

**参阅**

[颜色模式](color-mode.md) |
[保存](save.md) |
[颜色配置文件](color-profile.md)
