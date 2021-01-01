<template>
  <div>
    <h1>{{ name }} {{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  setup() {
    const name = "home screen";

    const id = inject<string>("id");

    return { name, id };
  }
});
</script>
