import { RouterView } from "vue-router";
import { defineComponent } from "vue";

export const App = defineComponent({
  setup() {
    return () => <RouterView />;
  },
});
