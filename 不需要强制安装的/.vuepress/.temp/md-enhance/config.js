import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "C:/Users/vc/Desktop/博客/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/vc/Desktop/博客/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
