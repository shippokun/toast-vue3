<template>
  <todo-list-container :completed="completed" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { LocationQuery, useRoute } from "vue-router";

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

export default defineComponent({
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

    return { completed };
  },
});
</script>
