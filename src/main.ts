import VueToast, { PluginOptions, POSITION } from "vue-toastification";
import { createApp } from "vue";

import { App } from "./App";
import { router } from "./router";
import { store } from "./store";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
};

createApp(App).use(store).use(router).use(VueToast, options).mount("#app");
