import { createStore } from "vuex";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

import * as todo from "./todo";

export const store = createStore<RootState>({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    [todo.featureKey]: todo.module,
  },
});

export type Store = typeof store;
