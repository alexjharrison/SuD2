<template>
  <div>
    <wall :board="myBoard" v-if="myBoard" />
  </div>
</template>

<script lang="ts">
import { useGameStore } from "@/store/game";
import { computed, defineComponent } from "vue";
import Wall from "./Wall.vue";

export default defineComponent({
  components: { Wall },
  setup() {
    const game = useGameStore();
    const myBoard = computed(() => game.myBoard);
    return { myBoard };
  }
});
</script>
