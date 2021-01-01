<template>
  <div>
    <h1>{{ name }} {{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { Game } from "../../../common/types";
import { defineComponent, inject } from "vue";
import { useSocket } from "../hooks/useSocket";

export default defineComponent({
  setup() {
    const gameState: Game = useSocket();

    const name = "home screen";

    const id = inject<string>("id");

    return { name, id, gameState };
  }
});
</script>
