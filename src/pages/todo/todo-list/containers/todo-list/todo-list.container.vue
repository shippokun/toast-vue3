<template>
  <todo-list-component :title="title" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { TodoListComponent } from "../../components";

export default defineComponent({
  name: "TodoListContainer",
  components: { TodoListComponent },
  setup() {
    const title = "todoList";
    return { title };
  },
});
</script>
