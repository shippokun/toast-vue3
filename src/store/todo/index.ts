import { Module } from "vuex";

import { RootState } from "../store";
import { getters } from "./getters";
import { TodoState, initialState } from "./states";

export const module: Module<TodoState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
};

export * from "./getters";
export * from "./states";
