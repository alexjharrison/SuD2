<template>
  <div class="container m-auto">
    <h1>Waiting Room</h1>
    <p>Copy the link below to have people join your game</p>

    <p>{{ url }}</p>
    <button @click="copyToClipboard">Copy to clipboard</button>
    <hr />
    <button v-if="amIHost" @click="startGame">
      Click here to start the game
    </button>
  </div>
</template>

<script lang="ts">
import { useSocket } from "@/hooks/useSocket";
import { useGameStore } from "@/store/game";
import { useRoomStore } from "@/store/room";
import { computed, defineComponent, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const { joinRoom, startGame } = useSocket();
    const room = useRoomStore();

    const route = useRoute();
    if (!room.myRoom) joinRoom(String(route.params.id));

    const url = document.URL + "?reset=true";
    const copyToClipboard = () => {
      navigator.clipboard.writeText(url);
    };

    const game = useGameStore();
    const router = useRouter();
    watch(
      () => game.id,
      () => {
        router.push(`/game/${game.id}`);
      }
    );

    return {
      url,
      copyToClipboard,
      amIHost: computed(() => room.amIHost()),
      startGame
    };
  }
});
</script>
