<template>
  <div class="w-full">
    <div class="flex justify-evenly">
      <Circle
        v-for="(circleTiles, i) in game.circles"
        :key="i"
        :tiles="circleTiles"
        :circle-index="i"
        :class="
          i % 2 !== 0 && screenWidth < 1000 && game.circles.length > 5
            ? 'stagger'
            : ''
        "
      />
    </div>
    {{ screenWidth }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/store/game";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import Circle from "./Circle.vue";

export default defineComponent({
  components: { Circle },
  setup() {
    const game = useGameStore();

    const { screenWidth } = useScreenWidth();

    return { game, screenWidth };
  }
});
</script>

<style scoped>
.stagger {
  margin: 10vw -10vw 0;
}
</style>
