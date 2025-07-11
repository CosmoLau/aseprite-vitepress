import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Aseprite",
    description: "A VitePress Site",
    // rewrites: {
    //     'en/:rest': ':rest',
    // },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    ignoreDeadLinks: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档',
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/CosmoLau/aseprite-vitepress' }
        ]
    },

    locales: {
        en: { label: 'English' },
        zh: { label: '简体中文' }
    },
})
