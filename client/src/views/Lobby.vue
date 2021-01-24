<template>
  <transition name="fade" mode="out-in">
    <enter-name-modal v-if="!user.name" />
    <join-game-screen v-else-if="!user.id" />
    <joined-game-screen v-else />
  </transition>
</template>

<script lang="ts">
import JoinedGameScreen from "@/components/lobby-screens/JoinedGameScreen.vue";
import JoinGameScreen from "@/components/lobby-screens/JoinGameScreen.vue";
import EnterNameModal from "../components/modals/EnterNameModal.vue";
import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: { EnterNameModal, JoinGameScreen, JoinedGameScreen },
  setup() {
    const user = useUserStore();
    user.fetchUser();

    const route = useRoute();
    const router = useRouter();
    if (route.query.reset) {
      user.resetUser();
      router.push({ query: {} });
    }

    const { myRoom } = useRoomStore();

    return { user, myRoom };
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
