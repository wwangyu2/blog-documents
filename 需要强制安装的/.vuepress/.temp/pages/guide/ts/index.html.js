import comp from "C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/ts/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/ts/\",\"title\":\"Ts\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Ts\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
