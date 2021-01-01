<template>
  <div>
    <h1>{{ name }} {{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { useSocket } from "../hooks/useSocket";

export default defineComponent({
  setup() {
    useSocket();

    const name = "home screen";

    const id = inject<string>("id");

    return { name, id };
  }
});
</script>
