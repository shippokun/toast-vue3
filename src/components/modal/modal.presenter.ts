import { ref } from "vue";

export const useModal = (isShow: boolean | undefined) => {
  const show = ref<boolean>(isShow || false);
  const toggle = () => {
    show.value = !show.value;
  };

  return {
    show,
    toggle,
  } as const;
};
