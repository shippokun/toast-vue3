<template>
  <div>{{ sliceTitle }}</div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

interface Props {
  title: string;
}

export default defineComponent({
  name: "TodoListComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props: Props) {
    const sliceTitle = computed(() => {
      console.log(props.title);
      return props.title.slice(0, 5);
    });

    return { sliceTitle };
  },
});
</script>
