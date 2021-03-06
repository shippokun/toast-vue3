import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { defineComponent } from "vue";

import { TodoUpdateDto } from "@/models";
import { useTodoStore } from "@/store";

import { TodoEditComponent } from "../../components";

interface Props {
  id: string;
}

export const TodoEditContainer = defineComponent({
  name: "TodoEditContainer",
  components: { TodoEditComponent },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props: Props) {
    const router = useRouter();
    const toast = useToast();
    const { todo, fetch, update } = useTodoStore();

    fetch({ id: props.id });

    const onUpdate = async (id: string, todo: TodoUpdateDto) => {
      await update({ id, todo })
        .then((res) => {
          toast.success(`Updated ${res.todo.title}`);
          router.push({ path: `/todos/${res.todo.id}` });
        })
        .catch((err) => {
          toast.error(err);
        });
    };

    return () => <TodoEditComponent todo={todo.value} onUpdate={onUpdate} />;
  },
});
