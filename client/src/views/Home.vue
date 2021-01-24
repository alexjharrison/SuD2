<template>
  <div class="container m-auto">
    <button @click="handleNewGame" tag="button">Start a new game</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { v4 } from "uuid";
import { useRouter } from "vue-router";
import { useRoomStore } from "@/store/room";
import { useGameStore } from "@/store/game";
import { useUserStore } from "@/store/user";

export default defineComponent({
  setup() {
    const router = useRouter();
    const room = useRoomStore();
    const game = useGameStore();
    const user = useUserStore();

    const handleNewGame = () => {
      room.reset();
      game.reset();
      user.resetUser();
      router.push(`/lobby/${v4()}`);
    };

    return { handleNewGame };
  }
});
</script>
