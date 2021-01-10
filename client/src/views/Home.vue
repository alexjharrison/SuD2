<template>
  <div>
    <router-link to="/game/12345">go to game</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const name = "home screen";

    return { name };
  }
});
</script>
