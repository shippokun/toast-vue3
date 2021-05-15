import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import { VSCode } from "@/components";

export const TodoLayout = defineComponent({
  name: "TodoLayout",
  components: { VSCode },
  setup() {
    const isVSCodeShow = ref(false);
    const onVSCodeShow = () => {
      isVSCodeShow.value = !isVSCodeShow.value;
    };

    <button onClick={() => onVSCodeShow()} />;
    return () => (
      <div class="container is-max-desktop">
        <section class="hero">
          <div class="hero-body  has-text-centered">
            <h1 class="title">Todo-Vue</h1>
            <a onClick={() => onVSCodeShow()}>
              Show GithubCode for VSCodeModal
            </a>
          </div>
        </section>
        <RouterView />
        <VSCode isShow={isVSCodeShow} />
      </div>
    );
  },
});
