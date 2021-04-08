<template>
  <todo-create-component :onCreate="onCreate" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { TodoCreateDto } from "@/models";
import { TodoCreateComponent } from "../../components";
import { useToast } from "vue-toastification";
import { useTodoStore } from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
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

    return { onCreate };
  },
});
</script>
