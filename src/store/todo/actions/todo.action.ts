import { ActionTree } from "vuex";

import { TodoCreateDto, TodoUpdateDto } from "@/models";
import { todoService } from "@/services";

import { RootState } from "../../store";
import { TodoState } from "../states";

export const FETCH_ALL_REQUEST = "[Todo] Fetch All";
export const FETCH_ALL_SUCCESS = "[Todo] Fetch All Success";
export const FETCH_ALL_FAILURE = "[Todo] Fetch All Failure";
export const FETCH_REQUEST = "[Todo] Fetch";
export const FETCH_SUCCESS = "[Todo] Fetch Success";
export const FETCH_FAILURE = "[Todo] Fetch Failure";
export const CREATE_REQUEST = "[Todo] Create";
export const CREATE_SUCCESS = "[Todo] Create Success";
export const CREATE_FAILURE = "[Todo] Create Failure";
export const UPDATE_REQUEST = "[Todo] Update";
export const UPDATE_SUCCESS = "[Todo] Update Success";
export const UPDATE_FAILURE = "[Todo] Update Failure";
export const REMOVE_REQUEST = "[Todo] Remove";
export const REMOVE_SUCCESS = "[Todo] Remove Success";
export const REMOVE_FAILURE = "[Todo] Remove Failure";

export const actions: ActionTree<TodoState, RootState> = {
  [FETCH_ALL_REQUEST]: async ({ commit }) => {
    try {
      commit(FETCH_ALL_REQUEST);
      const result = await todoService.fetchAll();
      commit(FETCH_ALL_SUCCESS, result);
      return { todos: result };
    } catch (error) {
      commit(FETCH_ALL_FAILURE, error);
      throw error;
    }
  },
  [FETCH_REQUEST]: async ({ commit }, arg: { id: string }) => {
    try {
      const { id } = arg;
      commit(FETCH_REQUEST, id);
      const result = await todoService.fetch(id);
      commit(FETCH_SUCCESS, result);
      return { todo: result };
    } catch (error) {
      commit(FETCH_FAILURE, error);
      throw error;
    }
  },
  [CREATE_REQUEST]: async ({ commit }, arg: { todo: TodoCreateDto }) => {
    try {
      const { todo } = arg;
      commit(CREATE_REQUEST);
      const result = await todoService.create(todo);
      commit(CREATE_SUCCESS, result);
      return { todo: result };
    } catch (error) {
      commit(CREATE_FAILURE, error);
      throw error;
    }
  },
  [UPDATE_REQUEST]: async (
    { commit },
    arg: { id: string; todo: TodoUpdateDto }
  ) => {
    try {
      const { id, todo } = arg;
      commit(UPDATE_REQUEST);
      const result = await todoService.update(id, todo);
      commit(UPDATE_SUCCESS, result);
      return { todo: result };
    } catch (error) {
      commit(UPDATE_FAILURE, error);
      throw error;
    }
  },
  [REMOVE_REQUEST]: async ({ commit }, arg: { id: string }) => {
    try {
      const { id } = arg;
      commit(REMOVE_REQUEST);
      const result = await todoService.remove(id);
      commit(REMOVE_SUCCESS, result);
      return { id: result };
    } catch (error) {
      commit(REMOVE_FAILURE, error);
      throw error;
    }
  },
};
