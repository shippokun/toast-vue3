<template>
  <todo-detail-component :todo="todo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { useTodoStore } from "@/store";

import { TodoDetailComponent } from "../../components";

interface Props {
  todoId: string;
}

export default defineComponent({
  name: "TodoDetailContainer",
  props: {
    todoId: {
      type: String,
      required: true,
    },
  },
  components: { TodoDetailComponent },
  setup(props: Props) {
    const { todo, fetch, isFetching, todos } = useTodoStore();

    fetch({ id: props.todoId });

    return { todo, isFetching, todos };
  },
});
</script>
