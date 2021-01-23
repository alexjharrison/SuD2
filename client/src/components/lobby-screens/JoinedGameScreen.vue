<template>
  <div>
    <button @click="joinGame(gameId)">Join this game</button>
  </div>
</template>

<script lang="ts">
import { useSocket } from "@/hooks/useSocket";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const gameId = String(route.params.id);

    const { joinGame } = useSocket();
    return { joinGame, gameId };
  }
});
</script>

<style scoped></style>
