import { GetterTree } from "vuex";

import { Todo } from "@/models";

import { RootState } from "../../store";
import { TodoState } from "../states";

export const isFetching = (state: TodoState): TodoState["isFetching"] =>
  state.isFetching;
export const selectedId = (state: TodoState): TodoState["selectedId"] =>
  state.selectedId;
export const todos = (state: TodoState): TodoState["todos"] => state.todos;
export const todo = (state: TodoState): Todo | null => {
  return state.selectedId
    ? state.todos.find((todo) => todo.id == state.selectedId) ?? null
    : null;
};

export const getters: GetterTree<TodoState, RootState> = {
  isFetching,
  selectedId,
  todos,
  todo,
};
