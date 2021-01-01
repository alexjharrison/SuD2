<template>
  <div>
    <p>{{ gameState }}</p>
    <br />
    <p>{{ gameState }}</p>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { useSetId } from "./hooks/useSetId";
import { useGetGameState } from "./hooks/useGetGameState";

export default defineComponent({
  setup() {
    const { gameState } = useGetGameState();
    const { id } = useSetId();
    provide("id", id);

    return { id, gameState };
  }
});
</script>

<style scoped></style>
