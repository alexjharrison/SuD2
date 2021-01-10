<template>
  <div class="flex flex-wrap h-32 p-2 mx-5 my-2 rounded-lg pot">
    <tile
      v-for="(tile, i) in tiles"
      :key="i"
      :color="tile"
      :width="tileWidth"
      :isSelectable="true"
    />
  </div>
</template>

<script lang="ts">
import { useScreenWidth } from "@/hooks/useScreenWidth";
import { computed, defineComponent, PropType } from "vue";
import { TileNames } from "common/types";
import Tile from "./Tile.vue";

export default defineComponent({
  components: { Tile },
  props: { tiles: { type: Array as PropType<TileNames[]>, required: true } },
  setup() {
    const { screenWidth } = useScreenWidth();
    const tileWidth = computed(() => {
      return screenWidth.value < 820 ? "2rem" : "3rem";
    });

    return { tileWidth };
  }
});
</script>

<style scoped>
.pot {
  background-image: url("~@/assets/images/pot.svg");
  background-color: #ff993366;
  background-position: center;
  background-size: 80px;
  background-repeat: no-repeat;
  border: #ff993399 2px solid;
  min-height: 55px;
}
</style>
