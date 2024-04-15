import comp from "C:/Users/vc/Desktop/博客/docs/.vuepress/.temp/pages/vuepress/index.html.vue"
const data = JSON.parse("{\"path\":\"/vuepress/\",\"title\":\"Vuepress\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vuepress\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
