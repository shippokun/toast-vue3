<template>
  <form class="panel is-link" @submit.prevent="handleSubmit">
    <p class="panel-heading">TodoEdit</p>
    <div class="px-3 pt-3">
      <div class="field">
        <label class="label">Title</label>
        <div class="control has-icons-right">
          <input
            class="input"
            :class="{
              'is-success': errors.title === undefined,
              'is-danger': errors.title,
            }"
            type="text"
            placeholder="Title input"
            v-model="title"
          />
          <span
            v-if="errors.title === undefined"
            class="icon is-small is-right"
          >
            <i class="fas fa-check"></i>
          </span>
          <span v-else class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p v-if="errors.title" class="help is-danger">{{ errors.title }}</p>
      </div>
      <div class="field">
        <label class="label">Context</label>
        <div class="control has-icons-right">
          <textarea
            class="textarea"
            placeholder="Textarea"
            v-model="context"
            :class="{
              'is-success': errors.context === undefined,
              'is-danger': errors.context,
            }"
          />
          <span
            v-if="errors.context === undefined"
            class="icon is-small is-right"
          >
            <i class="fas fa-check"></i>
          </span>
          <span v-else class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p v-if="errors.context" class="help is-danger">{{ errors.context }}</p>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="completed" />
            Completed
          </label>
        </div>
      </div>
    </div>
    <div class="panel-block is-justify-content-flex-end p-3">
      <div class="field is-grouped">
        <p class="control">
          <button
            type="submit"
            class="button is-outlined is-link"
            :disabled="!isValid"
          >
            Update
          </button>
        </p>
        <p class="control">
          <router-link :to="{ path: '/todos' }">
            <a class="button">Back</a>
          </router-link>
        </p>
      </div>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Todo, TodoUpdateDto } from "@/models";
import { useTodoEditPresenter } from "./todo-edit.presenter";

interface Props {
  todo: Todo | null;
  onUpdate: (id: string, todo: TodoUpdateDto) => void;
}

export default defineComponent({
  name: "TodoEditComponent",
  props: {
    todo: {
      type: Object as PropType<Props["todo"]>,
      default: null,
    },
    onUpdate: {
      type: Function as PropType<Props["onUpdate"]>,
      required: true,
    },
  },
  setup(props: Props) {
    const {
      values,
      errors,
      isValid,
      handleSubmit,
      setTitle,
      setContext,
      setCompleted,
    } = useTodoEditPresenter({
      todo: props.todo,
      onUpdate: props.onUpdate,
    });

    const title = computed({
      get: () => values.title,
      set: (value: string) => setTitle(value),
    });

    const context = computed({
      get: () => values.context,
      set: (value: string) => setContext(value),
    });

    const completed = computed({
      get: () => values.completed,
      set: (value: boolean) => setCompleted(value),
    });

    return { title, context, completed, errors, isValid, handleSubmit };
  },
});
</script>
