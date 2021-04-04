<template>
  <todo-detail-component :todo="todo" />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

import { useTodoStore } from "@/store";

import { TodoDetailComponent } from "../../components";

interface Props {
  todoId: number;
}

export default defineComponent({
  name: "TodoDetailContainer",
  props: {
    todoId: {
      type: Number,
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
