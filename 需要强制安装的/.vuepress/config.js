// import { defaultTheme } from '@vuepress/theme-default'
import { hopeTheme } from 'vuepress-theme-hope';
// import themeSidebar from 'vuepress-theme-sidebar';
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
// import { searchPlugin } from '@vuepress/plugin-search'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base:'/',//部署站点的基础路径,默认/
  lang: 'zh-CN',

  title: '不知道文档站',
  description: '不知道文档站。',
  head: [['link', { rel: 'icon', href: '' }]],//站点头部的icon

  theme: hopeTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      // { text: '首页', link: '/' },
      { text: '编程', children: [{ text: 'Markdown语法', link: '/guide/编程/Markdown语法/'}] }
    ],



    // comment: { 
    //   provider: 'Giscus',
    //   repo: 'red-cocode/blog-comment', 
    //   repoId: 'R_kgDOLrQHMQ',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOLrQHMc4CeiYS',
    // },

    sidebar: {
      '/guide/编程/Markdown语法/': "structure",
    },
    // sidebar: 'auto',

    plugins: {
      comment: {
        provider: 'Giscus',
        repo: 'red-cocode/blog-comment', 
        repoId: 'R_kgDOLrQHMQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOLrQHMc4CeiYS',
        position:'bottom',
      },
      components: {
        components: ["BiliBili", "VidStack"],
      },
      searchPro: {
        searchMaxSuggestions: 10,
        searchPlaceholder: '搜索文档',
      }
    },
 
  }),

  bundler: viteBundler(),

  // plugins: [fullTextSearchPlugin],

})
