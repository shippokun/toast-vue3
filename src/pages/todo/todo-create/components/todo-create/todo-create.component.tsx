import { defineComponent, computed, PropType } from "vue";

import { TodoCreateDto } from "@/models";
import { useTodoCreatePresenter } from "./todo-create.presenter";
import { RouterLink } from "vue-router";

interface Props {
  onCreate: (todo: TodoCreateDto) => void;
}

export const TodoCreateComponent = defineComponent({
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
      setCompleted,
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

    const completed = computed({
      get: () => values.completed,
      set: (value: boolean) => setCompleted(value),
    });

    return () => (
      <form class="panel is-link" onSubmit={handleSubmit}>
        <p class="panel-heading">TodoCreate</p>
        <div class="px-3 pt-3">
          <div class="field">
            <label class="label">Title</label>
            <div class="control has-icons-right">
              <input
                class={
                  errors.value.title === undefined
                    ? "input is-success"
                    : "input is-danger"
                }
                type="text"
                placeholder="Title input"
                v-model={title.value}
              />
              {errors.value.title === undefined ? (
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              ) : (
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              )}
            </div>
            {errors.value.title && (
              <p class="help is-danger">{errors.value.title}</p>
            )}
          </div>
          <div class="field">
            <label class="label">Context</label>
            <div class="control has-icons-right">
              <textarea
                placeholder="Textarea"
                v-model={context.value}
                class={
                  errors.value.context === undefined
                    ? "textarea is-success"
                    : "textarea is-danger"
                }
              />
              {errors.value.context === undefined ? (
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              ) : (
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              )}
            </div>
            {errors.value.context && (
              <p class="help is-danger">{errors.value.context}</p>
            )}
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model={completed.value} />
                Already Completed?
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
                disabled={!isValid.value}
              >
                Create
              </button>
            </p>
            <p class="control">
              <RouterLink to={{ path: "/todos" }}>
                <a class="button">Back</a>
              </RouterLink>
            </p>
          </div>
        </div>
      </form>
    );
  },
});
