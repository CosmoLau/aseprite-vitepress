---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Aseprite Document"
  text: "Unofficial Multilingual Documentation"
  tagline: Based on VitePress
  image: 
    src: '/aseprite.png'
    alt: 'logo'
  actions:
    - theme: brand
      text: Aseprite Document
      link: /en/docs/overview
    - theme: alt
      text: API Reference
      link: /en/api/README
    - theme: alt
      text: Official Website
      link: https://www.aseprite.org/
---
<script setup lang="ts">
import { useData } from 'vitepress'
</script>
::: tip
This project is an **unofficial multilingual documentation website** built on `VitePress`. If you need to make a purchase, please visit the <a href='https://www.aseprite.org/'>official website</a>.
:::
<div>
    <h1 :class='$style.features'>Animation & Layers</h1>
    <div :class='$style.grid'>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Organize Layers</h2>
            <img src='/layers.gif' alt='Organize Layers' :class='$style.cardImg'/>
            <p><a href='/en/docs/new-layer'>Create</a>, 
                <a href='/en/docs/copy-layer'>Copy</a>, 
                <a href='/en/docs/move-layer'>Move</a>, Drag & Delete<a href='/en/docs/layers'>Layers</a>.
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Animate</h2>
            <img src='/frames.gif' alt='Animate' :class='$style.cardImg'/>
            <p>
                <a href='/en/docs/new-frame'>Create</a>, 
                <a href='/en/docs/copy-frame'>Copy</a>, 
                <a href='/en/docs/move-frame'>Move</a>, Drag & Delete<a href='/en/docs/animation'>Frames</a>.
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Tag Frames</h2>
            <img src='/tag-frames.gif' alt='Tag Frames' :class='$style.cardImg'/>
            <p>Include several animations in the same file tagging sections.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Playback Modes</h2>
            <img src='/playback-modes.gif' alt='Playback Modes' :class='$style.cardImg'/>
            <p>Loop a section in forward, reverse, ping-pong modes. Change preview speed.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Onion Skin</h2>
            <img src='/onion-skin.gif' alt='Onion Skin' :class='$style.cardImg'/>
            <p>See other frames as reference to animate.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Red/Blue Mode</h2>
            <img src='/red-blue.gif' alt='Red/Blue Mode' :class='$style.cardImg'/>
            <p>Choose different onion skin modes.</p>
        </div>
    </div>
    <h1 :class='$style.features'>Color & Painting</h1>
    <div :class='$style.grid'>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Palette Control</h2>
            <img src='/palette-control.gif' alt='Palette Control' :class='$style.cardImg'/>
            <p>Copy & paste. Drag & drop. Resize palette
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Control Alpha Channel</h2>
            <img src='/control-alpha.gif' alt='Control Alpha Channel' :class='$style.cardImg'/>
            <p>
                Palette entries with alpha value.
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Color Wheel</h2>
            <img src='/color-wheel.gif' alt='Color Wheel' :class='$style.cardImg'/>
            <p>Select color harmonies.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Shading Mode</h2>
            <img src='/shading-mode.gif' alt='Shading Mode' :class='$style.cardImg'/>
            <p>Create light and shadows with the <a href='/en/docs/shading'>shading ink</a>.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Pixel Perfect Stroke</h2>
            <img src='/pixel-perfect.gif' alt='Pixel Perfect Stroke' :class='$style.cardImg'/>
            <p>Create perfect strokes for pixel-art.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>RotSprite Rotation</h2>
            <img src='/rotsprite.gif' alt='RotSprite Rotation' :class='$style.cardImg'/>
            <p>Avoid extreme pixel distortions when rotating tiny sprites.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Tiled Mode</h2>
            <img src='/tiled-mode.gif' alt='Tiled Mode' :class='$style.cardImg'/>
            <p>Create patterns repeating the image in a 3x3 grid.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Custom Brushes</h2>
            <img src='/custom-brush.gif' alt='Custom Brushes' :class='$style.cardImg'/>
            <p>Create custom brushes for dithering.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Blend Modes</h2>
            <img src='/blend-modes.gif' alt='Blend Modes' :class='$style.cardImg'/>
            <p>Composite layers to create color effects.</p>
        </div>
    </div>
    <h1 :class='$style.features'>Import & Export Files</h1>
    <div :class='$style.grid'>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>PNG Image Sequence</h2>
            <img src='/open-sequence.gif' alt='PNG Image Sequence' :class='$style.cardImg'/>
            <p>Open or save a sequence of images
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Create Animated GIF</h2>
            <img src='/create-gif.gif' alt='Create GIF' :class='$style.cardImg'/>
            <p>
                Create animations and save them as .gif files.
            </p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Create Sprite Sheets</h2>
            <img src='/sprite-sheet.gif' alt='Create Sprite Sheets' :class='$style.cardImg'/>
            <p>Export your work to sprite sheets in .png and .json files.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Data Recovery</h2>
            <img src='/data-recovery.gif' alt='Data Recovery' :class='$style.cardImg'/>
            <p>Recover your sprites in case of a crash.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Automatize Image Conversions</h2>
            <img src='/cli.gif' alt='cli' :class='$style.cardImg'/>
            <p>Integrate Aseprite in your assets pipeline with the <a href='/en/docs/cli'>command-line interface (CLI)</a>.</p>
        </div>
        <div :class='$style.card'>
            <h2 style='margin-top: 0; border: none;'>Create Texture Atlas</h2>
            <img src='/atlas.gif' alt='Create Texture Atlas' :class='$style.cardImg'/>
            <p>Store several animations in one texture atlas.</p>
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
