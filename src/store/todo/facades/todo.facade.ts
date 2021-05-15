import { computed } from "vue";
import { useStore } from "vuex";

import { Todo, TodoCreateDto, TodoUpdateDto } from "@/models";

import * as actions from "../actions";
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

  const fetchAll = (): Promise<{ todos: Todo[] }> => {
    return store.dispatch(`${featureKey}/${actions.FETCH_ALL_REQUEST}`);
  };

  const fetch = (arg: { id: string }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${actions.FETCH_REQUEST}`, arg);
  };

  const create = (arg: { todo: TodoCreateDto }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${actions.CREATE_REQUEST}`, arg);
  };

  const update = (arg: {
    id: string;
    todo: TodoUpdateDto;
  }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${actions.UPDATE_REQUEST}`, arg);
  };

  const remove = (arg: { id: string }): Promise<{ id: string }> => {
    return store.dispatch(`${featureKey}/${actions.REMOVE_REQUEST}`, arg);
  };

  return {
    isFetching,
    todos,
    todo,
    fetchAll,
    fetch,
    create,
    update,
    remove,
  } as const;
};
