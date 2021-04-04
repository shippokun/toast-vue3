import { Todo } from "@/models";

export const featureKey = "todos";

export interface TodoState {
  isFetching: boolean;
  selectedId: number | null;
  todos: Todo[];
}

const todoMocks: Todo[] = [
  {
    id: 1,
    title: "TodoTest",
    context: "test context",
    complated: false,
  },
  {
    id: 2,
    title: "MockData",
    context: "mock context",
    complated: true,
  },
];

export const initialState: TodoState = {
  isFetching: false,
  selectedId: null,
  todos: todoMocks,
};
