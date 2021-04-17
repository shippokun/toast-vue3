import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

import { TodoEditContainer } from "./containers";

export const TodoEditPage = defineComponent({
  name: "TodoEditPage",
  components: { TodoEditContainer },
  setup() {
    const route = useRoute();
    const id = ref(String(route.params["id"]));

    return () => <TodoEditContainer id={id.value} />;
  },
});
