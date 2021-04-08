<template>
  <todo-list-component :todos="todos" :completed="completed" :reset="reset" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { useTodoStore } from "@/store";
import { TodoListComponent } from "../../components";

interface Props {
  completed: boolean | null;
}

export default defineComponent({
  name: "TodoListContainer",
  components: { TodoListComponent },
  props: {
    completed: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
  setup(props: Props) {
    const router = useRouter();
    const { todos } = useTodoStore();

    const reset = (): void => {
      router.push({ path: "/todos" }).catch(() => {
        // 強制リロード
        router.go(0);
      });
    };

    return { todos, props, reset };
  },
});
</script>
