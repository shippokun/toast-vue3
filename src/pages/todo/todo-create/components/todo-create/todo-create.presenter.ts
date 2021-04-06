import { computed, reactive } from "vue";

import { TodoCreateDto } from "@/models";

export interface FormValues {
  title: string;
  context: string;
  complated: boolean;
}

const toDto = (values: FormValues) => {
  const value: TodoCreateDto = {
    title: values.title,
    context: values.context,
    complated: values.complated,
  };
  return value;
};

export const useTodoCreatePresenter = (arg: {
  onCreate?: (todo: TodoCreateDto) => void;
}) => {
  const { onCreate } = arg;
  const values = reactive<FormValues>({
    title: "",
    context: "",
    complated: false,
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

  const setComplated = (value: boolean) => {
    values.complated = value;
  };

  const handleSubmit = () => {
    if (isValid.value) {
      onCreate && onCreate(toDto(values));
    }
  };

  return {
    values,
    errors,
    isValid,
    handleSubmit,
    setTitle,
    setContext,
    setComplated,
  } as const;
};
