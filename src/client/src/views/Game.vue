<template>
  <div class="app-container">
    <game-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameTable from "@/components/game-table/GameTable.vue";

export default defineComponent({
  components: { GameTable },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.app-container {
  max-width: 1600px;
  margin: auto;
}
</style>
