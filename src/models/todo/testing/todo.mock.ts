import { Todo } from "../todo.model";

export const createTodosMock = (): Todo[] => {
  return [
    {
      id: "1",
      title: "title1",
      context: "context1",
      completed: false,
      updatedAt: new Date(123456789),
      createdAt: new Date(123456789),
    },
    {
      id: "2",
      title: "title2",
      context: "context2",
      completed: false,
      updatedAt: new Date(123456790),
      createdAt: new Date(123456790),
    },
    {
      id: "3",
      title: "title3",
      context: "context3",
      completed: false,
      updatedAt: new Date(123456791),
      createdAt: new Date(123456791),
    },
  ];
};
