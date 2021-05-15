import { Ref, ref } from "vue";

export const useModal = (isShow: Ref<boolean> | undefined) => {
  const show = isShow || ref(false);
  const toggle = () => {
    show.value = !show.value;
  };

  return {
    show,
    toggle,
  } as const;
};
