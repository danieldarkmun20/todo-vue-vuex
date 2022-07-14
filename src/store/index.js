import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: "1",
        text: "PASAR EL TEST",
        completed: false,
      },
      {
        id: "2",
        text: "Completar el todo",
        completed: true,
      },
      {
        id: "3",
        text: "Completar las consultas ",
        completed: false,
      },
      {
        id: "4",
        text: "Completar el todo pero en REACT.js",
        completed: false,
      },
    ],
    isError: false,
    isEdit: false,
  },
  mutations: {
    checkTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIdx].completed = true;
    },
    unCheckTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIdx].completed = false;
    },
    add(state, todo) {
      state.todos.push(todo);
    },
    remove(state, id) {
      state.todos = state.todos.filter((td) => td.id != id);
    },
    edit(state, { id, text}) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIdx].text = text;
    },
  },
  actions: {
    add({ commit }, text) {
      commit("add", {
        text,
        completed: false,
      });
    },
    edit({ commit }, { id, text }) {
      console.log(id)
      commit("edit", { id, text });
    },
  },
  getters: {
    getPendingToDos(state) {
      return state.todos.filter((td) => !td.completed);
    },
    getAllToDos(state) {
      return state.todos;
    },
    getCompletedTodos(state) {
      return state.todos.filter((td) => td.completed);
    },
    getIsError(state) {
      return state.isError;
    },
    getIsEdit(state) {
      return state.isEdit;
    },
  },
  modules: {},
});
