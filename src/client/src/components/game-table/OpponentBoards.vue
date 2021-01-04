<template>
  <div
    v-if="boards.length > 0"
    class="flex flex-row justify-around shrink-ray lg:flex-col"
  >
    <board-component
      v-for="(board, i) in boards"
      :key="i"
      :board="board"
      class="m-5"
    />
  </div>
</template>

<script lang="ts">
import { Board } from "@@/common/types";
import { defineComponent, PropType } from "vue";
import BoardComponent from "./Board.vue";

export default defineComponent({
  components: { BoardComponent },
  props: {
    boards: { type: Array as PropType<Board[]>, required: true }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.shrink-ray {
  transform: scale(0.45);
  transform-origin: top left;
  margin-right: -200px;
}
@media only screen and (max-width: 990px) {
  .shrink-ray {
    margin: auto;
  }
}
</style>
