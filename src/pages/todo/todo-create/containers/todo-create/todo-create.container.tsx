import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { defineComponent } from "vue";

import { TodoCreateDto } from "@/models";
import { useTodoStore } from "@/store";

import { TodoCreateComponent } from "../../components";

export const TodoCreateContainer = defineComponent({
  name: "TodoCreateContainer",
  components: {
    TodoCreateComponent,
  },
  setup() {
    const router = useRouter();
    const toast = useToast();
    const { create } = useTodoStore();

    const onCreate = async (todo: TodoCreateDto) => {
      await create({ todo })
        .then((res) => {
          toast.success(`create success ${res.todo.title}`);
          router.push({ path: `/todos/${res.todo.id}` });
        })
        .catch((err) => {
          toast.error(err);
        });
    };

    return () => <TodoCreateComponent onCreate={onCreate} />;
  },
});
