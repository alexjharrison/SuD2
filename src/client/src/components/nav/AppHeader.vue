<template>
  <nav class="flex justify-between p-2 bg-orange-lightest text-purple-darkest">
    <h1>SuD</h1>
    <button
      v-if="user.id"
      class="px-1 border rounded-sm border-grey-dark text-grey-darkest"
      @click="user.reset"
    >
      {{ user.name }}
    </button>
    <button
      v-else
      @click="user.setUser('Bill')"
      class="px-1 border rounded-sm border-grey-dark text-grey-darkest"
    >
      Set Name
    </button>
  </nav>
</template>

<script lang="ts">
import { useUserStore } from "@/store/user";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const user = useUserStore();
    return { user };
  }
});
</script>

<style scoped></style>
