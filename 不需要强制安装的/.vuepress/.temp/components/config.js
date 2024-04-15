import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Users/vc/Desktop/博客/node_modules/@vuepress/helper/lib/client/index.js";

import FontIcon from "C:/Users/vc/Desktop/博客/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BiliBili from "C:/Users/vc/Desktop/博客/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import VidStack from "C:/Users/vc/Desktop/博客/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "C:/Users/vc/Desktop/博客/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
