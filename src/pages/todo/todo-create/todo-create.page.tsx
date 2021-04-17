import { defineComponent } from "vue";

import { TodoCreateContainer } from "./containers";

export const TodoCreatePage = defineComponent({
  name: "TodoCreatePage",
  components: { TodoCreateContainer },
  setup() {
    return () => <TodoCreateContainer />;
  },
});
