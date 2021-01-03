<template>
  <div class="flex justify-between bg-red-light">
    <h1>Pot</h1>
    <tile
      v-for="(tile, i) in tiles"
      :key="i"
      :color="tile"
      :isSelectable="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TileNames } from "../../../../common/types";
import Tile from "./Tile";

export default defineComponent({
  components: { Tile },
  props: { tiles: { type: String as PropType<TileNames>, required: true } },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
