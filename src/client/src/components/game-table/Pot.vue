<template>
  <div>
    <h1>Pot</h1>
    <tile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tile from "./Tile";

export default defineComponent({
  components: { Tile },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
