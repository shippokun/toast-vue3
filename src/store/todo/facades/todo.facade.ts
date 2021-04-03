import { computed } from "vue";
import { useStore } from "vuex";

import * as getters from "../getters";
import { featureKey } from "../states";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTodoStore = () => {
  const store = useStore();
  const isFetching = computed<ReturnType<typeof getters.isFetching>>(
    () => store.getters[`${featureKey}/${getters.isFetching.name}`]
  );
  const todos = computed<ReturnType<typeof getters.todos>>(
    () => store.getters[`${featureKey}/${getters.todos.name}`]
  );
  const todo = computed<ReturnType<typeof getters.todo>>(
    () => store.getters[`${featureKey}/${getters.todo.name}`]
  );

  return {
    isFetching,
    todos,
    todo,
  } as const;
};
