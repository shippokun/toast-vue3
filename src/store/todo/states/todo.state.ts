import { Todo } from "@/models";

export const featureKey = "todos";

export interface TodoState {
  isFetching: boolean;
  selectedId: string | null;
  todos: Todo[];
}

export const initialState: TodoState = {
  isFetching: false,
  selectedId: null,
  todos: [],
};
