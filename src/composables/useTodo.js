import { computed, ref } from "vue";
import { useStore } from "vuex";
const useTodos = () => {
  const store = useStore();
  const form = ref({
    id: 0,
    text: "",
    completed: false,
  });
  const isEdit = computed(() => store.getters["getIsEdit"]);
  return {
    form,
    pending: computed(() => store.getters["getPendingToDos"]),
    isError: computed(() => store.getters["getIsError"]),
    isEdit,
    all: computed(() => store.getters["getAllToDos"]),
    completed: computed(() => store.getters["getCompletedTodos"]),
    checkTodo: (id) => store.commit("checkTodo", id),
    unCheckTodo: (id) => store.commit("unCheckTodo", id),
    add: (e) => {
      const text = e.target.value;
      if (text.trim()) {
        store.dispatch("add", e.target.value);
      }
      e.target.value = "";
    },
    remove: (id) => store.commit("remove", id),
    edit: (e, id) => {
      const text = e.target.value.trim();
      if (text.trim()) {
        store.dispatch("edit", {id, text});
      }
    },
  };
};

export default useTodos;
