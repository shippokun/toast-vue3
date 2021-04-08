import { Todo } from "@/models";

export const featureKey = "todos";

export interface TodoState {
  isFetching: boolean;
  selectedId: string | null;
  todos: Todo[];
}

const todoMocks: Todo[] = [
  {
    id: "1",
    title: "TodoTest",
    context: "test context",
    completed: false,
    updatedAt: new Date("2021-04-01 12:00:00"),
    createdAt: new Date("2021-04-01 11:00:00"),
  },
  {
    id: "2",
    title: "MockData",
    context: "mock context",
    completed: true,
    updatedAt: new Date("2021-04-02 12:00:00"),
    createdAt: new Date("2021-04-01 10:00:00"),
  },
];

export const initialState: TodoState = {
  isFetching: false,
  selectedId: null,
  todos: todoMocks,
};
