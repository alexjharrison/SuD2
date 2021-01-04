<template>
  <div :style="{ maxWidth }" class="relative w-full">
    <div
      v-for="(patternLine, i) in patternLines"
      :key="i"
      class="flex flex-row-reverse justify-start"
    >
      <tile
        v-for="tile in patternLine.numTiles"
        :key="tile * 200"
        :color="
          tile <= patternLine.tilesFilled ? patternLine.color : TileNames.GRAY
        "
        width="16%"
      />
    </div>
    <div class="absolute w-1/2 pin-t pin-l">
      <img v-if="isMyBoard" src="~@/assets/images/sud.svg" alt="sud logo" />
      <div v-else class="text-center">
        <h1 class="text-5xl">Score</h1>
        <p class="text-4xl">{{ score }} pts</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PatternLine } from "@@/common/types";
import { defineComponent, PropType } from "vue";
import { TileNames } from "../../../../common/types";
import Tile from "./Tile.vue";

export default defineComponent({
  components: { Tile },
  props: {
    patternLines: { type: Array as PropType<PatternLine[]>, required: true },
    isMyBoard: { type: Boolean, default: false },
    score: { type: Number, required: true },
    maxWidth: { type: String, required: true }
  },
  setup() {
    return { TileNames };
  }
});
</script>
