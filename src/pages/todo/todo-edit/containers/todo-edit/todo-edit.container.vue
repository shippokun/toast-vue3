<template>
  <todo-edit-component :todo="todo" :onUpdate="onUpdate" />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useTodoStore } from "@/store";
import { TodoUpdateDto } from "@/models";
import { useToast } from "vue-toastification";

import { TodoEditComponent } from "../../components";

interface Props {
  id: string;
}

export default defineComponent({
  name: "TodoEditContainer",
  components: { TodoEditComponent },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props: Props) {
    const toast = useToast();
    const { todos } = useTodoStore();

    // getterから取得する
    const todo = computed(() =>
      todos.value.find((todo) => todo.id === props.id)
    );

    const onUpdate = (id: string, todo: TodoUpdateDto) => {
      const text = Object.entries(todo).join(" ");
      toast.success(`${id} ${text}`);
    };

    return { todo, onUpdate };
  },
});
</script>
