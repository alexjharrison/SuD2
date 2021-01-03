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
      :circle-index="circleIndex"
    />
    <div class="flex justify-between">
      <tile
        :color="tiles[1]"
        width="3.5vw"
        max-width="38px"
        :isSelectable="true"
        :circle-index="circleIndex"
      />
      <span class="spreader"></span>
      <tile
        :color="tiles[2]"
        width="3.5vw"
        max-width="38px"
        :isSelectable="true"
        :circle-index="circleIndex"
      />
    </div>
    <tile
      :color="tiles[3]"
      width="3.5vw"
      max-width="38px"
      :isSelectable="true"
      :circle-index="circleIndex"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TileNames } from "../../../../common/types";
import Tile from "./Tile.vue";

export default defineComponent({
  components: { Tile },
  props: {
    tiles: { type: Array as PropType<TileNames[]>, required: true },
    circleIndex: { type: Number, required: true }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.circle {
  background-image: url("~@/assets/images/circle.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 11vw;
  max-width: 160px;
  min-width: 55px;
  height: 11vw;
  max-height: 160px;
  min-height: 55px;
}
.spreader {
  width: 3vw;
}
</style>
