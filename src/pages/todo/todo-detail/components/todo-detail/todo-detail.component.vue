<template>
  <div>{{ todo }}</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "@/models";

interface Props {
  todo: Todo;
}

export default defineComponent({
  name: "TodoDetailComponent",
  props: {
    todo: {
      type: Object as PropType<Props["todo"]>,
      required: true,
    },
  },
  setup(props: Props) {
    return { props };
  },
});
</script>
