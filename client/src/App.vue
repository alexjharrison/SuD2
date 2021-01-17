<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style>
main {
  background-image: url("~@/assets/images/texture.jpg");
}
</style>
