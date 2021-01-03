<template>
  <div
    class="flex flex-col items-center justify-center rounded-full bg-red-darkest circle"
  >
    <tile
      class="mx-auto"
      :color="tiles[0]"
      width="3.5vw"
      max-width="38px"
      :isSelectable="true"
    />
    <div class="flex justify-between">
      <tile
        :color="tiles[1]"
        width="3.5vw"
        max-width="38px"
        :isSelectable="true"
      />
      <span class="spreader"></span>
      <tile
        :color="tiles[2]"
        width="3.5vw"
        max-width="38px"
        :isSelectable="true"
      />
    </div>
    <tile
      :color="tiles[3]"
      width="3.5vw"
      max-width="38px"
      :isSelectable="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TileNames } from "../../../../common/types";
import Tile from "./Tile.vue";

export default defineComponent({
  components: { Tile },
  props: { tiles: { type: Array as PropType<TileNames[]>, required: true } },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.circle {
  background-image: url("~@/assets/images/circle.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 13vw;
  max-width: 160px;
  height: 13vw;
  max-height: 160px;
}
.spreader {
  width: 3vw;
}
</style>
