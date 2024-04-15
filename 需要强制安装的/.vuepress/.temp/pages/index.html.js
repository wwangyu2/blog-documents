import comp from "C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"世界\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"世界\",\"heroImage\":null,\"actions\":[{\"text\":\"Get Started\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on writing.\"},{\"title\":\"Vue-Powered\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Performant\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":\"Themes\",\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":\"Plugins\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"readingTime\":{\"minutes\":0.58,\"words\":174},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>This is the content of home page. Check <a href=\\\"https://vuejs.press/reference/default-theme/frontmatter.html#home-page\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Home Page Docs</a> for more details.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
