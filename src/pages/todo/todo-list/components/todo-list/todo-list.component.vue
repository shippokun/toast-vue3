<template>
  <nav class="panel">
    <p class="panel-heading">TodoList</p>
    <div class="panel-block">
      <p class="control has-icons-left" style="margin-right: 0.5rem">
        <input
          v-model="search"
          class="input"
          type="text"
          placeholder="Search"
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
      <router-link :to="{ path: '/todos/new' }">
        <a class="button is-link is-outlined">New Todo</a>
      </router-link>
    </div>
    <p class="panel-tabs">
      <router-link to="/todos"
        ><a :class="{ 'is-active': isAll }">All</a>
      </router-link>
      <router-link :to="{ path: '/todos', query: { complated: true } }"
        ><a :class="{ 'is-active': isComplated }">Completed</a>
      </router-link>
      <router-link :to="{ path: '/todos', query: { complated: false } }"
        ><a :class="{ 'is-active': isNoncomplated }">Noncompleted</a>
      </router-link>
    </p>
    <div v-for="todo in filterTodos" :key="todo.id">
      <router-link :to="{ path: `/todos/${todo.id}` }">
        <a
          class="panel-block is-justify-content-space-between"
          :class="{
            'is-active': !todo.complated,
            'text-gray': todo.complated,
          }"
        >
          <span style="display: flex; align-items: center">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ todo.title }}
          </span>
          {{ formatDate(todo.updatedAt, "MM/dd hh:mm") }}
        </a>
      </router-link>
    </div>
    <div class="panel-block">
      <button
        class="button is-link is-outlined is-fullwidth"
        @click="resetEvent"
      >
        Reset all filters
      </button>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, ref } from "vue";
import { Todo } from "@/models";
import { formatDate } from "@/libs";

interface Props {
  todos: Todo[];
  complated: boolean | null;
  reset: () => void;
}

export default defineComponent({
  name: "TodoListComponent",
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
    complated: {
      type: Boolean,
      required: false,
      default: null,
    },
    reset: {
      type: Function as PropType<Props["reset"]>,
      required: true,
    },
  },
  setup(props: Props) {
    const search = ref("");
    const isComplated = computed<boolean>(() => props.complated === true);
    const isNoncomplated = computed<boolean>(() => props.complated === false);
    const isAll = computed<boolean>(() => props.complated == null);

    const filterTodos = computed(() => {
      // 文字列検索
      const result = props.todos.filter((todo) =>
        todo.title.includes(search.value)
      );
      // 達成検索
      return props.complated === null
        ? result
        : result.filter((todo) => props.complated === todo.complated);
    });

    const resetEvent = () => {
      search.value = "";
      props.reset();
    };

    return {
      isComplated,
      isNoncomplated,
      isAll,
      search,
      filterTodos,
      resetEvent,
      formatDate,
    };
  },
});
</script>

<style scoped>
.text-gray {
  color: gray;
}
</style>
