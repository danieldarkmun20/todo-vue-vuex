import { computed, ref } from "vue";
import { useStore } from "vuex";
const useTodos = () => {
  const store = useStore();
  const isError =  ref(false)
  return {
    pending: computed(() => store.getters["getPendingToDos"]),
    isError,
    all: computed(() => store.getters["getAllToDos"]),
    completed: computed(() => store.getters["getCompletedTodos"]),
    checkTodo: (id) => store.commit("checkTodo", id),
    unCheckTodo: (id) => store.commit("unCheckTodo", id),
    add: (e) => {
      const text = e.target.value;
      if (text.trim() != '') {
        store.dispatch("add", e.target.value);
      } else {
        isError.value= true
      }
      e.target.value = "";
    },
    remove: (id) => store.commit("remove", id),
    edit: (e, id) => {
      const text = e.target.value.trim();
      if (text.trim() !== '') {
        store.dispatch("edit", {id, text});
      }else {
        isError.value= true
      }
    },
  };
};

export default useTodos;
