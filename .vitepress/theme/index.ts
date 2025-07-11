// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Banner from './Banner.vue'

export default {
  extends: DefaultTheme,
  Layout: Banner,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
