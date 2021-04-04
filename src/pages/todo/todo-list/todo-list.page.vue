<template>
  <todo-list-container :complated="complated" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { LocationQuery, useRoute } from "vue-router";

import { TodoListContainer } from "./containers";

const toComplated = (query: LocationQuery): boolean | null => {
  let result: boolean | null;
  switch (query["complated"]) {
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
    const complated = ref(toComplated(route.query));

    watch(
      () => route.query,
      (query) => {
        complated.value = toComplated(query);
      }
    );

    return { complated };
  },
});
</script>
