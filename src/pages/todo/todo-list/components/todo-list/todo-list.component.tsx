import { defineComponent, PropType, computed, ref } from "vue";
import { Todo } from "@/models";
import { formatDate } from "@/libs";

interface Props {
  todos: Todo[] | null;
  completed: boolean | null;
  reset: () => void;
}

// TODO: class binding
// is-active ? !todo.complated
// .text-gray: { color: gray }

export const TodoListComponent = defineComponent({
  name: "TodoListComponent",
  props: {
    todos: {
      type: Array as PropType<Props["todos"]>,
      default: null,
    },
    completed: {
      type: Boolean as PropType<Props["completed"]>,
      default: null,
    },
    reset: {
      type: Function as PropType<Props["reset"]>,
      required: true,
    },
  },
  setup(props: Props) {
    const search = ref("");
    const isCompleted = computed<boolean>(() => props.completed === true);
    const isNoncompleted = computed<boolean>(() => props.completed === false);
    const isAll = computed<boolean>(() => props.completed == null);

    const filterTodos = computed(() => {
      // 文字列検索
      const result = props.todos?.filter((todo) =>
        todo.title.includes(search.value)
      );
      // 達成検索
      return props.completed === null
        ? result
        : result?.filter((todo) => props.completed === todo.completed);
    });

    const resetEvent = () => {
      search.value = "";
      props.reset();
    };

    return () => (
      <nav class="panel is-link">
        <p class="panel-heading">TodoList</p>
        <div class="panel-block">
          <p class="control has-icons-left" style="margin-right: 0.5rem">
            <input
              v-model={search.value}
              class="input"
              type="text"
              placeholder="Search"
            />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
          <router-link to={{ path: "/todos/new" }}>
            <a class="button is-link is-outlined">New Todo</a>
          </router-link>
        </div>
        <p class="panel-tabs">
          <router-link to={{ path: "/todos" }}>
            <a class={isAll.value ? "is-active" : ""}>All</a>
          </router-link>
          <router-link to={{ path: "/todos", query: { completed: true } }}>
            <a class={isCompleted.value ? "is-active" : ""}>Completed</a>
          </router-link>
          <router-link to={{ path: "/todos", query: { completed: false } }}>
            <a class={isNoncompleted.value ? "is-active" : ""}>Noncompleted</a>
          </router-link>
        </p>
        <div>
          {filterTodos.value?.map((todo) => (
            <router-link to={{ path: `/todos/${todo.id}` }}>
              <a class={"panel-block is-justify-content-space-between"}>
                <span style="display: flex; align-items: center">
                  <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                  </span>
                  {todo.title}
                </span>
                {formatDate(todo.updatedAt, "MM/dd hh:mm")}
              </a>
            </router-link>
          ))}
        </div>
        <div class="panel-block">
          <button
            class="button is-link is-outlined is-fullwidth"
            onClick={() => resetEvent()}
          >
            Reset all filters
          </button>
        </div>
      </nav>
    );
  },
});
