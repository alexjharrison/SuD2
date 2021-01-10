<template>
  <div class="flex flex-wrap w-full" :style="{ maxWidth }">
    <tile
      v-for="(isFilled, i) in board.wall"
      width="16%"
      :isDisabled="!isFilled"
      :color="colors[i]"
      :key="i"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Tile from "./Tile.vue";
import { Board } from "common/types";
import { TileNames } from "../../../../common/types";

export default defineComponent({
  props: {
    board: { type: Object as PropType<Board>, required: true },
    maxWidth: { type: String, required: true }
  },
  components: { Tile },
  setup() {
    const colors = [
      TileNames.BLUE,
      TileNames.YELLOW,
      TileNames.RED,
      TileNames.BLACK,
      TileNames.SNOW,
      TileNames.SNOW,
      TileNames.BLUE,
      TileNames.YELLOW,
      TileNames.RED,
      TileNames.BLACK,
      TileNames.BLACK,
      TileNames.SNOW,
      TileNames.BLUE,
      TileNames.YELLOW,
      TileNames.RED,
      TileNames.RED,
      TileNames.BLACK,
      TileNames.SNOW,
      TileNames.BLUE,
      TileNames.YELLOW,
      TileNames.YELLOW,
      TileNames.RED,
      TileNames.BLACK,
      TileNames.SNOW,
      TileNames.BLUE
    ];
    return { colors };
  }
});
</script>
