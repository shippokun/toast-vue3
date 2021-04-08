<template>
  <todo-edit-component :todo="todo" :onUpdate="onUpdate" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTodoStore } from "@/store";
import { TodoUpdateDto } from "@/models";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

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
    const router = useRouter();
    const toast = useToast();
    const { todo, fetch, update } = useTodoStore();

    fetch({ id: props.id });

    const onUpdate = async (id: string, todo: TodoUpdateDto) => {
      await update({ id, todo })
        .then((res) => {
          toast.success(`update ${res.todo.title}`);
          router.push({ path: `/todos/${res.todo.id}` });
        })
        .catch((err) => {
          toast.error(err);
        });
    };

    return { todo, onUpdate };
  },
});
</script>
