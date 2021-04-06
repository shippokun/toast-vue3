<template>
  <todo-create-component :onCreate="onCreate" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { TodoCreateDto } from "@/models";
import { TodoCreateComponent } from "../../components";
import { useToast } from "vue-toastification";

export default defineComponent({
  name: "TodoCreateContainer",
  components: {
    TodoCreateComponent,
  },
  setup() {
    const toast = useToast();
    const onCreate = (todo: TodoCreateDto) => {
      const text = Object.entries(todo).join(" ");
      toast.success(text);
    };

    return { onCreate };
  },
});
</script>
