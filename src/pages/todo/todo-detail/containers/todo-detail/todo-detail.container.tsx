import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { defineComponent } from "vue";

import { useTodoStore } from "@/store";

import { TodoDetailComponent } from "../../components";

interface Props {
  todoId: string;
}

export const TodoDetailContainer = defineComponent({
  name: "TodoDetailContainer",
  props: {
    todoId: {
      type: String,
      required: true,
    },
  },
  components: { TodoDetailComponent },
  setup(props: Props) {
    const router = useRouter();
    const toast = useToast();
    const { todo, fetch, remove } = useTodoStore();

    fetch({ id: props.todoId });

    const onRemove = async () => {
      await remove({ id: props.todoId })
        .then((res) => {
          toast.success(`Deleted ${res.id}`);
          router.push({ path: "/todos" });
        })
        .catch((err) => {
          toast.error(err);
        });
    };

    return () => <TodoDetailComponent todo={todo.value} onRemove={onRemove} />;
  },
});
