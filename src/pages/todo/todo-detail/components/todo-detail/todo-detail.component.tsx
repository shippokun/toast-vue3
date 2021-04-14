import { defineComponent, PropType } from "vue";
import { Todo } from "@/models";
import { formatDate } from "@/libs";
import { RouterLink } from "vue-router";

interface Props {
  todo: Todo | null;
  onRemove: () => void;
}

export const TodoDetailComponent = defineComponent({
  name: "TodoDetailComponent",
  props: {
    todo: {
      type: Object as PropType<Props["todo"]>,
      default: null,
    },
    onRemove: {
      type: Function as PropType<Props["onRemove"]>,
      required: true,
    },
  },
  setup(props: Props) {
    return () => (
      <nav class="panel is-link">
        <p class="panel-heading">TodoDetail</p>
        {props.todo ? (
          <div>
            <div class="px-3 pt-3">
              <div class="field">
                <label class="label">Title</label>
                <p>{props.todo?.title}</p>
              </div>
              <div class="field">
                <label class="label">Context</label>
                <p>{props.todo?.context}</p>
              </div>
              <div class="field">
                <label class="label">Completed</label>
                <p>{props.todo?.completed}</p>
              </div>
              <div class="field">
                <label class="label">UpdatedAt</label>
                <p>{formatDate(props.todo?.updatedAt)}</p>
              </div>
              <div class="field">
                <label class="label">CreatedAt</label>
                <p>{formatDate(props.todo?.createdAt)}</p>
              </div>
            </div>
            <div class="panel-block is-justify-content-flex-end p-3">
              <div class="field is-grouped">
                <p class="control">
                  <button
                    class="button is-outlined is-danger"
                    onClick={() => props.onRemove()}
                  >
                    Delete
                  </button>
                </p>
                <p class="control">
                  <RouterLink to={{ path: `/todos/${props.todo?.id}/edit` }}>
                    <a class="button is-outlined is-link">Edit</a>
                  </RouterLink>
                </p>
                <p class="control">
                  <RouterLink to={{ path: "/todos" }}>
                    <a class="button">Back</a>
                  </RouterLink>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}
      </nav>
    );
  },
});
