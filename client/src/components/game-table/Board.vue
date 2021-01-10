<template>
  <div>
    <div class="relative flex justify-center">
      <pattern-lines
        :pattern-lines="board.patternLines"
        :score="board.score"
        :isMyBoard="isMyBoard"
        :max-width="maxWidth"
        :name="board.name"
        class="mr-1 md:mr-8"
      />
      <wall :board="board" class="ml-1 md:ml-8" :max-width="maxWidth" />
    </div>
    <div class="flex items-center justify-evenly">
      <penalty-line :penalties="board.penalties" />
      <h2 v-if="isMyBoard" class="text-sm text-center md:text-3xl">
        {{ board.name }} <br />
        Score: {{ board.score }} pts
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Board } from "common/types";
import { computed, defineComponent, PropType } from "vue";
import PenaltyLine from "./PenaltyLine.vue";
import PatternLines from "./PatternLines.vue";
import Wall from "./Wall.vue";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default defineComponent({
  components: { Wall, PatternLines, PenaltyLine },
  props: {
    isMyBoard: { type: Boolean, default: false },
    board: { type: Object as PropType<Board>, required: true }
  },
  setup() {
    const { screenWidth } = useScreenWidth();

    const maxWidth = computed(() => {
      if (screenWidth.value < 1000) return "400px";
      else return "500px";
    });

    return { maxWidth };
  }
});
</script>
