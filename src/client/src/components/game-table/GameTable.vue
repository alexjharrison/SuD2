<template>
  <div>
    <!-- <div class="flex"> -->
    <circle-rows :circles="game.circles" />
    <pot :tiles="game.potTiles" />
    <!-- </div> -->
    <board :board="game.myBoard" :isMyBoard="true" v-if="game.myBoard" />
    <!-- <board v-for="board in otherBoards" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/store/game";
import Board from "./Board.vue";
import CircleRows from "./CircleRows.vue";
import Pot from "./Pot.vue";

export default defineComponent({
  components: { Board, Pot, CircleRows },
  setup() {
    const game = useGameStore();
    return { game };
  }
});
</script>
