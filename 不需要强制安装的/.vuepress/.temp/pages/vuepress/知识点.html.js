import comp from "C:/Users/vc/Desktop/博客/docs/.vuepress/.temp/pages/vuepress/知识点.html.vue"
const data = JSON.parse("{\"path\":\"/vuepress/%E7%9F%A5%E8%AF%86%E7%82%B9.html\",\"title\":\"无用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"无用\",\"date\":\"2023-01-01T00:00:00.000Z\",\"category\":[\"前端\"],\"tag\":[\"无用\",\"世界\"],\"order\":1},\"headers\":[],\"readingTime\":{\"minutes\":0.15,\"words\":44},\"filePathRelative\":\"vuepress/知识点.md\",\"localizedDate\":\"2023年1月1日\",\"excerpt\":\"<p>最重要的是config.js和package.json，package.json相当于环境依赖，config.js相当于装饰网站的部分</p>\\n\"}")
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
