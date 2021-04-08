import { MutationTree } from "vuex";

import { Todo } from "@/models";

import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  REMOVE_REQUEST,
  REMOVE_SUCCESS,
  REMOVE_FAILURE,
} from "../actions";
import { TodoState } from "../states";

export const mutations: MutationTree<TodoState> = {
  [FETCH_ALL_REQUEST]: (state) => {
    state.isFetching = true;
  },
  [FETCH_ALL_SUCCESS]: (state, todos: Todo[]) => {
    state.isFetching = false;
    state.todos = todos;
  },
  [FETCH_ALL_FAILURE]: (state) => {
    state.isFetching = false;
  },
  [FETCH_REQUEST]: (state, id: string) => {
    state.isFetching = true;
    state.selectedId = id;
  },
  [FETCH_SUCCESS]: (state, todo: Todo) => {
    state.isFetching = false;
    state.todos = state.todos.map((t) => t.id).includes(todo.id)
      ? state.todos.map((t) => (t.id === todo.id ? todo : t))
      : [...state.todos, todo];
  },
  [FETCH_FAILURE]: (state) => {
    state.isFetching = false;
  },
  [CREATE_REQUEST]: (state) => {
    state.isFetching = true;
  },
  [CREATE_SUCCESS]: (state, todo: Todo) => {
    state.isFetching = false;
    state.todos = [...state.todos, todo];
  },
  [CREATE_FAILURE]: (state) => {
    state.isFetching = false;
  },
  [UPDATE_REQUEST]: (state) => {
    state.isFetching = true;
  },
  [UPDATE_SUCCESS]: (state, todo: Todo) => {
    state.isFetching = false;
    state.todos = state.todos.map((t) => (t.id === todo.id ? todo : t));
  },
  [UPDATE_FAILURE]: (state) => {
    state.isFetching = false;
  },
  [REMOVE_REQUEST]: (state) => {
    state.isFetching = true;
  },
  [REMOVE_SUCCESS]: (state, id: string) => {
    state.isFetching = false;
    state.todos = state.todos.filter((t) => t.id !== id);
  },
  [REMOVE_FAILURE]: (state) => {
    state.isFetching = false;
  },
};
