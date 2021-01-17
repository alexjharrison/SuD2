<template>
  <div class="container m-auto">
    <button @click="$router.push(`/lobby/${newUUID}`)" tag="button">
      Start a new game
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { v4 } from "uuid";

export default defineComponent({
  setup() {
    const newUUID = v4();

    return { newUUID };
  }
});
</script>
