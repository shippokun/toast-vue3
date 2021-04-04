<template>
  <todo-detail-container :todoId="todoId" />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute, RouteParams } from "vue-router";

import { TodoDetailContainer } from "./containers";

const toTodoId = (params: RouteParams) => {
  return Number(params["id"] || 1);
};
export default defineComponent({
  name: "TodoDetailPage",
  components: { TodoDetailContainer },
  setup() {
    const route = useRoute();
    const todoId = ref<number>(toTodoId(route.params));

    watch(
      () => route.params,
      (params) => {
        todoId.value = toTodoId(params);
      }
    );

    return { todoId };
  },
});
</script>
