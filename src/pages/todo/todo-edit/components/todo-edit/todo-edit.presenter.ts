import { computed, reactive, watchEffect } from "vue";

import { TodoUpdateDto, Todo } from "@/models";

interface FormValues {
  title: string;
  context: string;
  completed: boolean;
}

const toDto = (todo: Todo, values: FormValues) => {
  const value: TodoUpdateDto = {
    id: todo.id,
    title: values.title,
    context: values.context,
    completed: values.completed,
  };

  return value;
};

export const useTodoEditPresenter = (arg: {
  todo: Todo;
  onUpdate?: (id: string, todo: TodoUpdateDto) => void;
}) => {
  const { onUpdate } = arg;
  const values = reactive<FormValues>({
    title: "",
    context: "",
    completed: false,
  });

  const errors = computed(() => {
    return {
      title: values.title.length === 0 ? "title is required" : undefined,
      context: values.context.length > 400 ? "context is 400 limit" : undefined,
    };
  });
  const isValid = computed(
    () => Object.values(errors.value).filter((error) => !!error).length === 0
  );

  const setTitle = (value: string) => {
    values.title = value;
  };

  const setContext = (value: string) => {
    values.context = value;
  };

  const setCompleted = (value: boolean) => {
    values.completed = value;
  };

  const handleSubmit = () => {
    const todo = arg.todo;
    if (isValid.value && todo) {
      onUpdate && onUpdate(todo.id, toDto(todo, values));
    }
  };

  watchEffect(() => {
    const todo = arg.todo;
    values.title = todo?.title ?? "";
    values.context = todo?.context ?? "";
    values.completed = todo?.completed ?? false;
  });

  return {
    errors,
    isValid,
    values,
    handleSubmit,
    setTitle,
    setContext,
    setCompleted,
  } as const;
};
