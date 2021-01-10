<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/store/user";
import { useGameStore } from "./store/game";
// import { useSocket } from "./hooks/useSocket";

export default defineComponent({
  setup() {
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
