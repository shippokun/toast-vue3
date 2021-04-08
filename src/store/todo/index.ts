import { Module } from "vuex";

import { RootState } from "../store";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./muitations";
import { TodoState, initialState } from "./states";

export const module: Module<TodoState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};

export * from "./getters";
export * from "./states";
export * from "./actions";
export * from "./muitations";
