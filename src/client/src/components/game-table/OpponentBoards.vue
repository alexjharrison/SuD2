<template>
  <div class="flex flex-col" v-if="boards.length > 0">
    <board-component
      v-for="board in boards"
      :key="board.id"
      :board="board"
      class="shrink-ray"
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
  transform: skew(0.5, 0.5);
  width: 30%;
  height: 30%;
}
.shrink-ray >>> * {
  font-size: 12px !important;
}
</style>
