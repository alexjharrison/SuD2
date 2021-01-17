<template>
  <div v-if="user.name" class="container m-auto">
    <h1>Waiting Room</h1>
    <p>Copy the link below to have people join your game</p>

    <p>{{ url }}</p>
    <button @click="copyToClipboard">Copy to clipboard</button>
  </div>
  <div v-else>
    <h1>Enter your name</h1>
    <form @submit.prevent="name && user.setUser(name, gameId)">
      <input type="text" v-model="name" autofocus />
      <button type="submit">Save Name</button>
    </form>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/store/user";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    const user = useUserStore();
    user.fetchUser();

    const name = ref("");
    const gameId = String(route.params.id);

    const url = document.URL;
    const copyToClipboard = () => {
      navigator.clipboard.writeText(url);
    };

    return { copyToClipboard, url, user, name, gameId };
  }
});
</script>
