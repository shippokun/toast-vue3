import { defineComponent, Teleport, PropType, renderSlot, Ref, ref } from "vue";

import { useModal } from "./modal.presenter";

type Props = {
  isShow?: Ref<boolean>;
};

export const ModalComponent = defineComponent({
  name: "ModalComponent",
  props: {
    isShow: {
      type: Object as PropType<Props["isShow"]>,
      default: ref(false),
    },
  },
  setup(props: Props, { slots }) {
    const { show, toggle } = useModal(props.isShow);

    const slot = renderSlot(slots, "default");

    return () => (
      <Teleport to="body">
        {show.value && (
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content" style="width: 80%">
              <div class="box">{slot}</div>
            </div>
            <button
              class="modal-close is-large"
              aria-label="close"
              id="closeButton"
              onClick={() => toggle()}
            ></button>
          </div>
        )}
      </Teleport>
    );
  },
});
