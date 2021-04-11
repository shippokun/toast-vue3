import { shallowMount } from "@vue/test-utils";
import { TodoLayout } from "./todo.layout";

describe("todo.layout.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(TodoLayout);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
