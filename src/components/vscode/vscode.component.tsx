import { defineComponent, PropType, Ref, ref } from "vue";
import styled from "vue3-styled-components";

import { ModalComponent } from "@/components";

type Props = {
  isShow?: Ref<boolean>;
};

const Iframe = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export const VSCode = defineComponent({
  name: "VSCodeComponent",
  components: { ModalComponent, Iframe },
  props: {
    isShow: {
      type: Object as PropType<Props["isShow"]>,
      default: ref(false),
    },
  },
  setup(props: Props) {
    return () => (
      <ModalComponent isShow={props.isShow}>
        <Iframe
          src="https://github1s.com/shippokun/toast-vue3/blob/main/README.md"
          frameborder="0"
          title="VSCode"
        />
      </ModalComponent>
    );
  },
});
