import { LocationQuery, useRoute } from "vue-router";
import { defineComponent, ref, watch } from "vue";

import { TodoListContainer } from "./containers";

const toCompleted = (query: LocationQuery): boolean | null => {
  let result: boolean | null;
  switch (query["completed"]) {
    case "true":
      result = true;
      break;
    case "false":
      result = false;
      break;
    default:
      result = null;
  }
  return result;
};

export const TodoListPage = defineComponent({
  name: "TodoListPage",
  components: { TodoListContainer },
  setup() {
    const route = useRoute();
    const completed = ref(toCompleted(route.query));

    watch(
      () => route.query,
      (query) => {
        completed.value = toCompleted(query);
      }
    );

    return () => <TodoListContainer completed={completed.value} />;
  },
});
