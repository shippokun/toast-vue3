<template>
  <nav class="panel is-info">
    <p class="panel-heading">TodoDetail</p>
    <div class="px-3 pt-3">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <p>
            {{ todo.title }}
          </p>
        </div>
      </div>
      <div class="field">
        <label class="label">Context</label>
        <div class="control">
          <p>{{ todo.context }}</p>
        </div>
      </div>
    </div>
    <div class="panel-block is-justify-content-flex-end p-3">
      <div class="field is-grouped">
        <p class="control">
          <router-link :to="{ path: '/todos/edit' }">
            <a class="button is-outlined is-info">Edit</a>
          </router-link>
        </p>
        <p class="control">
          <router-link :to="{ path: '/todos' }">
            <a class="button">Back</a>
          </router-link>
        </p>
      </div>
    </div>
  </nav>
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
