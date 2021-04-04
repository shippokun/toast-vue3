import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/todos" },
  {
    path: "/todos",
    component: () => import("./layouts/todo").then((m) => m.TodoLayout),
    children: [
      {
        path: "",
        component: () =>
          import("./pages/todo/todo-list").then((m) => m.TodoListPage),
      },
      {
        path: ":id",
        component: () =>
          import("./pages/todo/todo-detail").then((m) => m.TodoDetailPage),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
