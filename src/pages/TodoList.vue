<template>
  <div class="container w-full max-w-2xl" id="app">
    <div class="text-3xl text-center font-bold mb-3 uppercase">Todo List</div>
    <div>
      <form
        action="#"
        method="POST"
        id="add_todo_form"
        class="flex justify-center"
      >
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo"
          class="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300"
        />
        <button
          type="submit"
          class="text-xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full"
        >
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </form>
    </div>
    <div class="bg-gray-100 mt-5 p-5 rounded-xl shadow-lg text-gray-700">
      <h1 class="font-bold text-xl italic block mb-0 leading-none">Todo's</h1>
      <small id="todo_stats" class="block mb-5 mt-0 text-xs text-gray-500"
        >10 Todos pending, 20 Completed.</small
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
                Details
              </th>
              <th class="px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-orange-100 even:bg-orange-50">
              <td>No Todos found. Add a few to begin.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
