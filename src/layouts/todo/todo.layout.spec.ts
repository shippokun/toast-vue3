import { mount } from "@vue/test-utils";
import { TodoLayout } from "./";

describe("todo.layout.vue", () => {
  it("render", () => {
    const wrapper = mount(TodoLayout);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
