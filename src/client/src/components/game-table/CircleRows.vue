<template>
  <div class="w-full">
    <div class="flex justify-evenly">
      <Circle
        v-for="(circleTiles, i) in game.circles"
        :key="i"
        :tiles="circleTiles"
        :class="i % 2 !== 0 && screenWidth < 800 ? 'stagger' : ''"
      />
    </div>
    {{ screenWidth }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
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
