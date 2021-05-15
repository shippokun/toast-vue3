import { useRouter } from "vue-router";
import { defineComponent, PropType } from "vue";

import { useTodoStore } from "@/store";

import { TodoListComponent } from "../../components";

interface Props {
  completed: boolean | null;
}

export const TodoListContainer = defineComponent({
  name: "TodoListContainer",
  components: { TodoListComponent },
  props: {
    completed: {
      type: Boolean as PropType<Props["completed"]>,
      default: null,
    },
  },
  setup(props: Props) {
    const router = useRouter();
    const { todos, fetchAll } = useTodoStore();

    fetchAll();

    const reset = (): void => {
      router.push({ path: "/todos" }).catch(() => {
        // 強制リロード
        router.go(0);
      });
    };

    return () => (
      <TodoListComponent
        todos={todos.value}
        completed={props.completed}
        reset={reset}
      />
    );
  },
});
