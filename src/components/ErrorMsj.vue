<template>
  <div class="grid-cols-12">
    <p class="text-lg bg-red-700 rounded py-2 px-4 text-white">
      {{ msj }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msj: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
