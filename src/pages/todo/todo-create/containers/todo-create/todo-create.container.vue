<template>
  <todo-create-component />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { TodoCreateComponent } from "../../components";

export default defineComponent({
  name: "TodoCreateContainer",
  components: {
    TodoCreateComponent,
  },
});
</script>
