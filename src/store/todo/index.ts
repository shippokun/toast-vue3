import { Module } from "vuex";

import { RootState } from "../store";
import { actions } from "./actions";
import { getters } from "./getters";
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
