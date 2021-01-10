<template>
  <div class="w-full">
    <div class="flex justify-evenly">
      <Circle
        v-for="(circleTiles, i) in circles"
        :key="i"
        :tiles="circleTiles"
        :circle-index="i"
        :class="
          i % 2 !== 0 && screenWidth < 1000 && circles.length > 5
            ? 'stagger'
            : ''
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TileNames } from "common/types";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import Circle from "./Circle.vue";

export default defineComponent({
  components: { Circle },
  props: {
    circles: { type: Array as PropType<TileNames[][]>, required: true }
  },
  setup() {
    const { screenWidth } = useScreenWidth();

    return { screenWidth };
  }
});
</script>

<style scoped>
.stagger {
  margin: 10vw -10vw 0;
}
</style>
