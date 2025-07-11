import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

export default defineAdditionalConfig({
    lang: 'zh-CN',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh/docs/': { base: '/zh/docs/', items: sidebarDocs() },
            '/zh/api/': { base: '/zh/api/', items: sidebarApi() },
        },

        outline: {
            label: '页面导航',
        },
        lastUpdated: {
            text: '最后更新于',
        },
        editLink: {
            text: '在 GitHub 上编辑此页面',
            pattern: 'https://github.com/aseprite/aseprite/edit/master/docs/:path',
        },
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '主页', link: '/zh' },
        { text: '文档', link: '/zh/docs/overview', activeMatch: '/zh/docs/' },
        { text: 'API 参考', link: '/zh/api/README', activeMatch: '/zh/api/' },
    ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '概览',
            link: 'overview',
        },
        {
            text: '基础',
            link: 'basics',
            collapsed: false,
            items: [
                { text: '图片与精灵', link: 'sprite' },
                { text: '颜色', link: 'color' },
                { text: '绘制', link: 'drawing' },
                { text: '变换', link: 'transformations' },
            ],
        },
        {
            text: '精灵',
            link: 'sprite',
            collapsed: false,
            items: [
                { text: '图层', link: 'layers' },
                { text: '动画', link: 'animation' },
                { text: '瓦片图', link: 'tilemap' },
                { text: '切片', link: 'slices' },
            ],
        },
        {
            text: '文件',
            link: 'files',
            collapsed: false,
            items: [
                { text: '保存', link: 'save' },
                { text: '导出', link: 'exporting' },
                { text: '精灵工作表', link: 'sprite-sheet' },
                { text: 'CLI', link: 'cli' },
            ],
        },
        {
            text: '自定义',
            link: 'customization',
            collapsed: false,
            items: [
                { text: '偏好设置', link: 'preferences' },
                { text: '扩展', link: 'extensions' },
                { text: '脚本', link: 'scripting' },
            ],
        }
    ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '概览',
            link: 'README',
        },
        {
            text: 'API 变更',
            link: 'Changes',
        },
        {
            text: '全局命名空间',
            collapsed: false,
            items: [
                { text: 'app', link: '/api/app' },
                { text: 'app.command', link: '/api/app_command' },
                { text: 'app.fs', link: '/api/app_fs' },
                { text: 'app.os', link: '/api/app_os' },
                { text: 'app.pixelColor', link: '/api/pixelcolor' },
                { text: 'app.theme', link: '/api/app_theme' },
                { text: 'json', link: '/api/json' },
            ]
        },
        {
            text: '常量',
            collapsed: false,
            items: [
                { text: 'Align', link: '/api/align' },
                { text: 'AniDir', link: '/api/anidir' },
                { text: 'BlendMode', link: '/api/blendmode' },
                { text: 'BrushPattern', link: '/api/brushpattern' },
                { text: 'BrushType', link: '/api/brushtype' },
                { text: 'ColorMode', link: '/api/colormode' },
                { text: 'FilterChannels', link: '/api/filterchannels' },
                { text: 'Ink', link: '/api/ink' },
                { text: 'MouseButton', link: '/api/mousebutton' },
                { text: 'MouseCursor', link: '/api/mousecursor' },
                { text: 'RangeType', link: '/api/rangetype' },
                { text: 'SelectionMode', link: '/api/selectionmode' },
                { text: 'SpriteSheetDataFormat', link: '/api/spritesheetdataformat' },
                { text: 'SpriteSheetType', link: '/api/spritesheettype' },
                { text: 'WebSocketMessageType', link: '/api/websocketmessagetype' },
            ]
        },
        {
            text: '类/对象',
            collapsed: false,
            items: [
                { text: 'Brush', link: '/api/brush' },
                { text: 'Cel', link: '/api/cel' },
                { text: 'Color', link: '/api/color' },
                { text: 'ColorSpace', link: '/api/colorspace' },
                { text: 'Dialog', link: '/api/dialog' },
                { text: 'Editor', link: '/api/editor' },
                { text: 'Events', link: '/api/events' },
                { text: 'Frame', link: '/api/frame' },
                { text: 'GraphicsContext', link: '/api/graphicscontext' },
                { text: 'Image', link: '/api/image' },
                { text: 'ImageSpec', link: '/api/imagespec' },
                { text: 'KeyEvent', link: '/api/keyevent' },
                { text: 'Layer', link: '/api/layer' },
                { text: 'MouseEvent', link: '/api/mouseevent' },
                { text: 'Palette', link: '/api/palette' },
                { text: 'Plugin', link: '/api/plugin' },
                { text: 'Point', link: '/api/point' },
                { text: 'Properties', link: '/api/properties' },
                { text: 'Range', link: '/api/range' },
                { text: 'Rectangle', link: '/api/rectangle' },
                { text: 'Selection', link: '/api/selection' },
                { text: 'Site', link: '/api/site' },
                { text: 'Size', link: '/api/size' },
                { text: 'Slice', link: '/api/slice' },
                { text: 'Sprite', link: '/api/sprite' },
                { text: 'Tag', link: '/api/tag' },
                { text: 'Tile', link: '/api/tile' },
                { text: 'Tileset', link: '/api/tileset' },
                { text: 'Timer', link: '/api/timer' },
                { text: 'Tool', link: '/api/tool' },
                { text: 'TouchEvent', link: '/api/touchevent' },
                { text: 'Version', link: '/api/version' },
                { text: 'WebSocket', link: '/api/websocket' },
                { text: 'Window', link: '/api/window' },
            ]
        }
    ]
}