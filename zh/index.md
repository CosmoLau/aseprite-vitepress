---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Aseprite 文档"
  text: "非官方多语言文档"
  tagline: 基于 VitePress 搭建
  image: 
    src: '/aseprite.png'
    alt: 'logo'
  actions:
    - theme: brand
      text: Aseprite 文档
      link: /zh/docs/overview
    - theme: alt
      text: API 参考
      link: /zh/api/README
    - theme: alt
      text: 官方网站
      link: https://www.aseprite.org/
---
<script setup lang="ts">
import { useData } from 'vitepress'
</script>
::: tip 注意
本项目是基于 `VitePress` 搭建的**非官方多语言文档网站**。如需购买，请移驾<a href='https://www.aseprite.org/'>官方网站</a>。
:::
<div>
    <h1 :class='$style.features'>组织与层级</h1>
    <div :class='$style.grid'>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>组织层级</h2>
            <img src='/layers.gif' alt='层级' :class='$style.cardImg'/>
            <p><a href='/zh/docs/new-layer'>创建</a>、
                <a href='/zh/docs/copy-layer'>复制</a>、
                <a href='/zh/docs/move-layer'>移动</a>、
                拖动与删除<a href='/zh/docs/layers'>层级</a>。
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>动画</h2>
            <img src='/frames.gif' alt='动画' :class='$style.cardImg'/>
            <p>
                <a href='/zh/docs/new-frame'>创建</a>、
                <a href='/zh/docs/copy-frame'>复制</a>、
                <a href='/zh/docs/move-frame'>移动</a>、
                链接、拖动与删除<a href='/zh/docs/animation'>帧</a>或<a href='/zh/docs/cels'>单元格</a>。
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>标记帧</h2>
            <img src='/tag-frames.gif' alt='标记帧' :class='$style.cardImg'/>
            <p>通过标记区域，在同一个文件中包含多个动画。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>回放模式</h2>
            <img src='/playback-modes.gif' alt='回放模式' :class='$style.cardImg'/>
            <p>在回放模式下，您可以循环播放标记区域中的动画。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>洋葱皮</h2>
            <img src='/onion-skin.gif' alt='洋葱皮' :class='$style.cardImg'/>
            <p>参考其他帧进行动画制作。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>红/蓝模式</h2>
            <img src='/red-blue.gif' alt='红/蓝模式' :class='$style.cardImg'/>
            <p>选择不同的洋葱皮模式。</p>
        </div>
    </div>
    <h1 :class='$style.features'>颜色与绘画</h1>
    <div :class='$style.grid'>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>调色板控制</h2>
            <img src='/palette-control.gif' alt='调色板控制' :class='$style.cardImg'/>
            <p>复制与粘贴。拖放操作。调整调色板大小。
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>控制 Alpha 通道</h2>
            <img src='/control-alpha.gif' alt='控制 Alpha 通道' :class='$style.cardImg'/>
            <p>
                带有 Alpha 值的调色板条目。
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>调色盘</h2>
            <img src='/color-wheel.gif' alt='调色盘' :class='$style.cardImg'/>
            <p>选择色彩调和方案。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>着色模式</h2>
            <img src='/shading-mode.gif' alt='着色模式' :class='$style.cardImg'/>
            <p>使用<a href='/zh/docs/shading'>着色墨水</a>创建光影效果。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>像素完美笔触</h2>
            <img src='/pixel-perfect.gif' alt='像素完美笔触' :class='$style.cardImg'/>
            <p>为像素画创建完美的笔触。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>RotSprite 旋转</h2>
            <img src='/rotsprite.gif' alt='RotSprite 旋转' :class='$style.cardImg'/>
            <p>旋转较小的精灵图时，避免出现严重的像素失真。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>瓦片模式</h2>
            <img src='/tiled-mode.gif' alt='瓦片模式' :class='$style.cardImg'/>
            <p>通过在 3x3 网格中重复图像来创建图案。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>自定义笔刷</h2>
            <img src='/custom-brush.gif' alt='自定义笔刷' :class='$style.cardImg'/>
            <p>创建用于抖动处理的自定义笔刷。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>混合模式</h2>
            <img src='/blend-modes.gif' alt='混合模式' :class='$style.cardImg'/>
            <p>合成图层以创建色彩效果。</p>
        </div>
    </div>
    <h1 :class='$style.features'>导入与导出文件</h1>
    <div :class='$style.grid'>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>PNG 图像序列</h2>
            <img src='/open-sequence.gif' alt='PNG 图像序列' :class='$style.cardImg'/>
            <p>打开或保存序列图像。
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>创建动态 GIF</h2>
            <img src='/create-gif.gif' alt='创建 GIF' :class='$style.cardImg'/>
            <p>
                创建动画并将其保存为 .gif 文件。
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>创建精灵表</h2>
            <img src='/sprite-sheet.gif' alt='精灵表' :class='$style.cardImg'/>
            <p>将您的作品导出为 .png 和 .json 文件格式的精灵表。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>数据恢复</h2>
            <img src='/data-recovery.gif' alt='数据恢复' :class='$style.cardImg'/>
            <p>在程序崩溃时恢复您的精灵图。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>自动化图像转换</h2>
            <img src='/cli.gif' alt='cli' :class='$style.cardImg'/>
            <p><a href='/zh/docs/cli'>使用命令行界面 (CLI)</a> 将 Aseprite 集成到您的资源处理流程中。</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>创建纹理图集</h2>
            <img src='/atlas.gif' alt='创建纹理图集' :class='$style.cardImg'/>
            <p>在一个纹理图集中存储多个动画。</p>
        </div>
    </div>
</div>

<style module>
.features {
    font-size: 24px;
    width: 100%;
    display: block;
    padding-top: 16px;
    padding-bottom: 16px;
    color: #ffffff;
    text-align: center;
    background-color: #7d929e;
    margin-top: 16px;
    margin-bottom: 0px;
    border-radius: 8px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc((100% - 32px) / 3), 1fr));
    gap: 16px;
    width: 100%;
    margin-top: 32px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1); 
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
}

.cardImg {
    display: block;
    margin: 0 auto;
}
</style>
