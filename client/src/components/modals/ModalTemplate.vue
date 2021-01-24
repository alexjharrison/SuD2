<template>
  <div class="flex items-center justify-center min-h-screen">
    <div
      class="w-4/5 h-64 px-4 py-2 bg-transparent border rounded lg:w-1/2 border-blue-darkest"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      isOpen: true
    };
  }
});
</script>

<style scoped></style>
