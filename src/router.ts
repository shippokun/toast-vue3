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
      {
        path: "new",
        component: () =>
          import("./pages/todo/todo-create").then((m) => m.TodoCreatePage),
      },
      {
        path: ":id/edit",
        component: () =>
          import("./pages/todo/todo-edit").then((m) => m.TodoEditPage),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
