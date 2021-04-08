<template>
  <todo-detail-component :todo="todo" />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

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
    const { todos } = useTodoStore();

    // getterから取得する
    const todo = computed(() =>
      todos.value.find((todo) => todo.id === props.todoId)
    );

    return { todo };
  },
});
</script>
