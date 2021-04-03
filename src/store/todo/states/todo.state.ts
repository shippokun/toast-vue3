import { Todo } from "@/models";

export const featureKey = "todos";

export interface TodoState {
  isFetching: boolean;
  selectedId: number | null;
  todos: Todo[];
}

const todoMock: Todo = {
  id: 1,
  title: "TodoTest",
  context: "test context",
  complated: false,
};

export const initialState: TodoState = {
  isFetching: false,
  selectedId: null,
  todos: [todoMock],
};
