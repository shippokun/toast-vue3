import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const TodoLayout = defineComponent({
  name: "TodoLayout",
  setup() {
    return () => (
      <div class="container is-max-desktop">
        <section class="hero">
          <div class="hero-body">
            <h1 class="title has-text-centered">Todo-Vue</h1>
          </div>
        </section>
        <RouterView />
      </div>
    );
  },
});
