<template>
  <div class="max-h-screen overflow-y-hidden">
    <circle-rows :circles="game.circles" />
    <pot :tiles="game.potTiles" />
    <div class="flex flex-col lg:flex-row">
      <board
        class="flex-grow"
        :board="game.myBoard"
        :isMyBoard="true"
        v-if="game.myBoard"
      />
      <opponent-boards :boards="game.otherBoards" class="flex-grow" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/store/game";
import Board from "./Board.vue";
import CircleRows from "./CircleRows.vue";
import Pot from "./Pot.vue";
import OpponentBoards from "./OpponentBoards.vue";

export default defineComponent({
  components: { Board, Pot, CircleRows, OpponentBoards },
  setup() {
    const game = useGameStore();
    return { game };
  }
});
</script>
