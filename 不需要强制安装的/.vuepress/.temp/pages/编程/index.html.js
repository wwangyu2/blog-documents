import comp from "C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/编程/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BC%96%E7%A8%8B/\",\"title\":\"编程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"编程\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
