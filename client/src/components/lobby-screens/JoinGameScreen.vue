<template>
  <div class="mt-6 text-center">
    <button
      class="p-2 text-3xl border rounded-lg bg-purple-light border-purple-lighter"
      @click="joinRoom(gameId)"
    >
      Confirm Joining this game
    </button>
  </div>
</template>

<script lang="ts">
import { useSocket } from "@/hooks/useSocket";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const { joinRoom } = useSocket();
    const route = useRoute();
    const gameId = String(route.params.id);
    return { joinRoom, gameId };
  }
});
</script>

<style scoped></style>
