<template>
  <nav class="panel is-link">
    <p class="panel-heading">TodoDetail</p>
    <div class="px-3 pt-3">
      <div class="field">
        <label class="label">Title</label>
        <p>
          {{ todo.title }}
        </p>
      </div>
      <div class="field">
        <label class="label">Context</label>
        <p>{{ todo.context }}</p>
      </div>
      <div class="field">
        <label class="label">Complated</label>
        <p>{{ todo.complated }}</p>
      </div>
      <div class="field">
        <label class="label">UpdatedAt</label>
        <p>{{ formatDate(todo.updatedAt) }}</p>
      </div>
      <div class="field">
        <label class="label">CreatedAt</label>
        <p>{{ formatDate(todo.createdAt) }}</p>
      </div>
    </div>
    <div class="panel-block is-justify-content-flex-end p-3">
      <div class="field is-grouped">
        <p class="control">
          <router-link :to="{ path: `/todos/${todo.id}/edit` }">
            <a class="button is-outlined is-link">Edit</a>
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
import { formatDate } from "@/libs";

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
  setup() {
    return { formatDate };
  },
});
</script>
