export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/博客/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"世界"} }],
  ["/vuepress/%E7%9F%A5%E8%AF%86%E7%82%B9.html", { loader: () => import(/* webpackChunkName: "知识点.html" */"C:/Users/vc/Desktop/博客/docs/.vuepress/.temp/pages/vuepress/知识点.html.js"), meta: {"t":"无用","O":1} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/vc/Desktop/博客/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/vuepress/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/vc/Desktop/博客/docs/.vuepress/.temp/pages/vuepress/index.html.js"), meta: {"t":"Vuepress"} }],
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
