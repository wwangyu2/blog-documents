import { defineClientConfig } from "vuepress/client";
import { useHint } from "C:/Users/vc/Desktop/实验/搭建文档/文档站/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "C:/Users/vc/Desktop/实验/搭建文档/文档站/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHint();
  }
});
