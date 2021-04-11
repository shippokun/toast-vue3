import { mount } from "@vue/test-utils";
import { createTodosMock } from "@/models/testing";
import { TodoListComponent } from "./todo-list.component";
import { router } from "@/router";

describe("todo-list.component.tsx", () => {
  describe("renders", () => {
    it("default render", () => {
      const wrapper = mount(TodoListComponent, {
        props: {
          reset: jest.fn(),
        },
        global: {
          plugins: [router],
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
    it("props todos", () => {
      const todos = createTodosMock();
      const mockFn = jest.fn();
      const wrapper = mount(TodoListComponent, {
        props: {
          todos,
          reset: mockFn,
        },
        global: {
          plugins: [router],
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
      wrapper.find("button").trigger("click");
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
