<template>
  <div class="flex mt-1">
    <div
      v-for="index in 7"
      :key="index"
      class="flex flex-col items-center text-center"
    >
      <p
        class="border-t-4 border-l-4 border-r-4 rounded-t-full mb-n text-grey-light bg-green-darker border-orange-dark"
      >
        -{{ index }}
      </p>
      <tile :color="penalties[index - 1] || TileNames.GRAY" max-width="60px" />
    </div>
  </div>
</template>

<script lang="ts">
import { PatternLine } from "common/types";
import { defineComponent, PropType } from "vue";
import { TileNames } from "../../../../common/types";
import Tile from "./Tile.vue";

export default defineComponent({
  components: { Tile },
  props: {
    penalties: { type: Array as PropType<PatternLine[]>, required: true }
  },
  setup() {
    return { TileNames };
  }
});
</script>

<style scoped>
.mb-n {
  margin-bottom: -5px;
  padding: 1px 0;
  width: 70%;
}
</style>
