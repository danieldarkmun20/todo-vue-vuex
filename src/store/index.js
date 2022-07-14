import { createStore } from "vuex";

export default createStore({
  state: {
    todo: [
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
        text: "Completar el todo pero en REAC.js",
        completed: false,
      },
    ],
  },
  mutations: {
    // toggleTodo(state, id){
    //   const todoIdx = state.todo.findIndex(todo => todo.id === id);
    //   state.todo[todoIdx].completed = !state.todo[todoIdx].completed;
    // }
  },
  actions: {},
  getters: {
    // pendingTodos(state, getters) {
    //   return state.todo.filter((td) => !td.completed);
    // },
    // allTodos(state, getters) {
    //   return state.todo;
    // },
    // completedTodos(state, getters) {
    //   return state.todo.filter((td) => td.completed);
    // },
    // getTodosByTab: (_, getters) => (tab) =>{ 
    //   switch (tab) {
    //     case 'all': return getters.allTodos;
    //     case 'completed': return getters.completedTodos
    //     case 'pending': return getters.pendingTodos
    //   }
    // },
  },
  modules: {},
});
