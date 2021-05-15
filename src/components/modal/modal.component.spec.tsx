import { mount } from "@vue/test-utils";
import { ref } from "vue";
import { ModalComponent } from "./modal.component";

const createContainer = (tag = "div") => {
  const container = document.createElement(tag);
  document.body.appendChild(container);
  return container;
};

import { useModal } from "./modal.presenter";
jest.mock("./modal.presenter");

describe("modal", () => {
  const initBody = document.body.innerHTML;
  const toggleMock = jest.fn();
  beforeEach(() => {
    document.body.innerHTML = initBody;
  });
  it("isShowがfalseのとき、なにもrenderしないこと", () => {
    (useModal as jest.Mock).mockImplementation(() => {
      return {
        toggle: toggleMock,
        show: ref(false),
      };
    });
    mount(ModalComponent, {
      attachTo: createContainer(),
    });

    expect(document.body.innerHTML).toMatchSnapshot();
  });
  it("isShowがtrueのとき、renderすること", () => {
    (useModal as jest.Mock).mockImplementation(() => {
      return {
        toggle: toggleMock,
        show: ref(true),
      };
    });

    const mockSlot = "test";
    mount(ModalComponent, {
      props: {
        isShow: ref(true),
      },
      attachTo: createContainer(),
      slots: {
        default: mockSlot,
      },
    });

    expect(document.body.innerHTML).toMatchSnapshot();
    expect(
      document.body.getElementsByClassName("modal is-active")
    ).toBeDefined();
    expect(toggleMock).not.toHaveBeenCalled();

    (document.getElementById("closeButton") as HTMLButtonElement).click();
    expect(toggleMock).toHaveBeenCalled();

    expect(document.body.getElementsByClassName("box")[0].innerHTML).toBe(
      mockSlot
    );
  });
});
