<template>
  <enter-name-modal v-if="!user.name" />
  <join-game-screen v-else-if="!myRoom.gameId" />
  <joined-game-screen v-else />
</template>

<script lang="ts">
import JoinedGameScreen from "@/components/lobby-screens/JoinedGameScreen.vue";
import JoinGameScreen from "@/components/lobby-screens/JoinGameScreen.vue";
import EnterNameModal from "../components/modals/EnterNameModal.vue";
import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { defineComponent } from "vue";

export default defineComponent({
  components: { EnterNameModal, JoinGameScreen, JoinedGameScreen },
  setup() {
    const user = useUserStore();
    user.fetchUser();

    const { myRoom } = useRoomStore();

    return { user, myRoom };
  }
});
</script>
