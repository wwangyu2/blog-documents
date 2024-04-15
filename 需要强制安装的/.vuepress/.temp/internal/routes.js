export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"世界"} }],
  ["/guide/MySQL/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/MySQL/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/guide/%E7%BC%96%E7%A8%8B/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/编程/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/guide/vue/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/vue/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/guide/ts/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/ts/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/guide/%E7%BC%96%E7%A8%8B/Markdown%E8%AF%AD%E6%B3%95/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/编程/Markdown语法/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/guide/MySQL/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/MySQL/index.html.js"), meta: {"t":"My SQL"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide"} }],
  ["/guide/%E7%BC%96%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/编程/index.html.js"), meta: {"t":"编程"} }],
  ["/guide/vue/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/vue/index.html.js"), meta: {"t":"Vue"} }],
  ["/guide/ts/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/ts/index.html.js"), meta: {"t":"Ts"} }],
  ["/guide/%E7%BC%96%E7%A8%8B/Markdown%E8%AF%AD%E6%B3%95/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/实验/搭建文档/文档站/docs/.vuepress/.temp/pages/guide/编程/Markdown语法/index.html.js"), meta: {"t":"Markdown语法"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
