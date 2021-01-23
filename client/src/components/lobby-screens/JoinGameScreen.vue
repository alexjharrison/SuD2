<template>
  <div class="container m-auto">
    <h1>Waiting Room</h1>
    <p>Copy the link below to have people join your game</p>

    <p>{{ url }}</p>
    <button @click="copyToClipboard">Copy to clipboard</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const url = document.URL;
    const copyToClipboard = () => {
      navigator.clipboard.writeText(url);
    };
    return { url, copyToClipboard };
  }
});
</script>
