import { defineAdditionalConfig, defineConfig, type DefaultTheme } from 'vitepress'

export default defineAdditionalConfig({
    lang: 'en-US',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/en/docs/': { base: '/en/docs/', items: sidebarDocs() },
            '/en/api/': { base: '/en/api/', items: sidebarApi() },
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/en/' },
        { text: 'Document', link: '/en/docs/overview' },
        { text: 'API Refence', link: '/en/api/README' },
    ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Overview',
            link: 'overview',
        },
        {
            text: 'Basic',
            link: 'basics',
            collapsed: false,
            items: [
                { text: 'Image & Sprite', link: 'sprite' },
                { text: 'Color', link: 'color' },
                { text: 'Drawing', link: 'drawing' },
                { text: 'Transformations', link: 'transformations' },
            ]
        },
        {
            text: 'Sprite',
            link: 'sprite', 
            collapsed: false,
            items: [
                { text: 'Layers', link: 'layers' },
                { text: 'Animation', link: 'animation' },
                { text: 'Tilemap', link: 'tilemap' },
                { text: 'Slices', link: 'slices' },
            ]
        },
        {
            text: 'Files',
            link: 'files',
            collapsed: false,
            items: [
                { text: 'Save', link: 'save' },
                { text: 'Exporting', link: 'exporting' },
                { text: 'Sprite Sheets', link: 'sprite-sheet' },
                { text: 'CLI', link: 'cli' },
            ]
        },
        {
            text: 'Customization',
            link: 'customization',
            collapsed: false,
            items: [
                { text: 'Preferences', link: 'preferences' },
                { text: 'Extensions', link: 'extensions' },
                { text: 'Scripting', link: 'scripting' },
            ]
        }
    ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Overview',
            link: 'README',
        },
        {
            text: 'API Changes',
            link: 'Changes',
        },
        {
            text: 'Globals namespaces',
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
            text: 'Constants',
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
            text: 'Classes/objects',
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