<template>
  <form class="panel is-info" @submit.prevent="handleSubmit">
    <p class="panel-heading">TodoCreate</p>
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
        <label class="label">Content</label>
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
            <input type="checkbox" v-model="complated" />
            Already Complated?
          </label>
        </div>
      </div>
    </div>
    <div class="panel-block is-justify-content-flex-end p-3">
      <div class="field is-grouped">
        <p class="control">
          <button
            type="submit"
            class="button is-outlined is-info"
            :disabled="!isValid"
          >
            Create
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
import { defineComponent, computed, PropType } from "vue";

import { TodoCreateDto } from "@/models";
import { useTodoCreatePresenter } from "./todo-create.presenter";

interface Props {
  onCreate: (todo: TodoCreateDto) => void;
}

export default defineComponent({
  name: "TodoCreateComponent",
  props: {
    onCreate: {
      type: Function as PropType<Props["onCreate"]>,
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
      setComplated,
    } = useTodoCreatePresenter({
      onCreate: props.onCreate,
    });

    const title = computed({
      get: () => values.title,
      set: (value: string) => setTitle(value),
    });

    const context = computed({
      get: () => values.context,
      set: (value: string) => setContext(value),
    });

    const complated = computed({
      get: () => values.complated,
      set: (value: boolean) => setComplated(value),
    });

    return { title, context, complated, errors, isValid, handleSubmit };
  },
});
</script>
