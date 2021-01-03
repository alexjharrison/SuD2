<template>
  <div>
    <!-- <div class="flex"> -->
    <circle-rows />
    <!-- <pot /> -->
    <!-- </div> -->
    <board />
    <!-- <board v-for="board in otherBoards" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "./Board.vue";
import CircleRows from "./CircleRows.vue";

export default defineComponent({
  components: { Board, CircleRows },
  setup() {
    return {};
  }
});
</script>
