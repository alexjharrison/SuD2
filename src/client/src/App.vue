<template>
  <div class="flex flex-col min-h-screen">
    <app-header />
    {{ game.boards }}
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useUserStore } from "@/store/user";
import AppHeader from "@/components/nav/AppHeader.vue";
import { useGameStore } from "./store/game";
import { useSocket } from "./hooks/useSocket";

export default defineComponent({
  components: { AppHeader },
  setup() {
    // init socket connection and populate initial game data
    useSocket();

    const user = useUserStore();
    user.fetchUser();

    const game = useGameStore();

    return { user, game };
  }
});
</script>

<style>
main {
  background-image: url("~@/assets/images/texture.jpg");
}
</style>
