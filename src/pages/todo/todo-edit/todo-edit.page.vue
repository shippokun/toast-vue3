<template>
  <todo-edit-container :id="id" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

import { TodoEditContainer } from "./containers";

export default defineComponent({
  name: "TodoEditPage",
  components: { TodoEditContainer },
  setup() {
    const route = useRoute();
    const id = ref(String(route.params["id"]));

    return { id };
  },
});
</script>
