import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import VueToast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
};

createApp(App).use(router).use(VueToast, options).mount("#app");
