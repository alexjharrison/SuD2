<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { useSetId } from "./hooks/useSetId";

export default defineComponent({
  setup() {
    const { id } = useSetId();
    provide("id", id);

    return { id };
  }
});
</script>

<style scoped></style>
