<template>
  <div class="container w-full max-w-2xl" id="app">
    <div class="text-3xl text-center font-bold mb-3 uppercase">Todo List</div>
    <div>
      <div class="grid gap-3">
        <div class="grid-cols-12">
          <input
            autofocus
            autocomplete="off"
            @keyup.enter="add"
            type="text"
            name="todo"
            placeholder="Agregar todo"
            class="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-full outline-orange-300"
          />
        </div>
        <ErrorMsj
          v-if="isError"
          msj="Error! Por favor ingrese un todo valido"
        />
      </div>
    </div>
    <div class="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
      <h1 class="font-bold text-xl italic block mb-0 leading-none">Todo's</h1>
      <small id="todo_stats" class="block mb-5 mt-0 text-xs text-gray-500"
        >{{ pending.length }} Pendientes,
        {{ completed.length }} Comopletados.</small
      >
      <div class="max-h-80 overflow-y-auto">
        <table id="todo_table" class="table w-full">
          <thead>
            <tr>
              <th
                class="text-center px-1 py-2 bg-orange-500 text-orange-100 rounded-tl-xl"
              >
                #
              </th>
              <th class="text-left px-1 py-2 bg-orange-500 text-orange-100">
                Detalle
              </th>
              <th class="px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="all.length <= 0"
              class="odd:bg-orange-100 even:bg-orange-50"
            >
              <td>No hay cosas por hacer. Ingrese uno.</td>
            </tr>
            <tr v-for="(todo, index) in all" :key="index" :class="getCompletedClass(todo.completed)">
              <td class="text-center px-1 py-2 text-orange-800">
                {{ index + 1 }}
              </td>
              <td class="px-1 py-2 text-orange-800">
                <input
                  type="text"
                  :value="todo.text"
                  @keyup.enter="(event) => edit(event, todo.id)"
                />
              </td>
              <td
                class="text-center px-1 py-2 text-orange-800 flex gap-3 justify-start"
              >
                <button class="text-orange-600" @click="checkTodo(todo.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button class="text-orange-600" @click="unCheckTodo(todo.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button @click="remove(todo.id)" class="text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMsj from "../components/ErrorMsj.vue";
import useTodo from "../composables/useTodo";

export default {
  components: {
    ErrorMsj,
  },
  setup(props) {
    const {
      pending,
      all,
      completed,
      add,
      remove,
      checkTodo,
      unCheckTodo,
      isError,
      edit,
    } = useTodo();
    return {
      pending,
      all,
      completed,
      add,
      remove,
      checkTodo,
      unCheckTodo,
      edit,
      isError,
      getCompletedClass: (completed) => {
        return !completed
          ? "odd:bg-orange-100 even:bg-orange-50 transition duration-300"
          : "bg-green-100 line-through";
      },
    };
  },
};
</script>

<style></style>
