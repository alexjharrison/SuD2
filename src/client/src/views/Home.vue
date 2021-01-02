<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const name = "home screen";

    return { name };
  }
});
</script>
