<template>
  <modal-template>
    <form @submit.prevent="handleSubmit">
      <h2 class="text-3xl">Please enter your name:</h2>
      <input
        class="p-2 mt-5 text-lg rounded"
        type="text"
        v-model.trim="formName"
        autofocus
        placeholder="enter name here"
        required
      />
      <br />
      <button
        class="p-1 mt-4 text-xl border-2 rounded border-blue-darker bg-blue-lighter"
        type="submit"
      >
        Save
      </button>
    </form>
  </modal-template>
</template>

<script lang="ts">
import { useUserStore } from "@/store/user";
import { defineComponent, ref } from "vue";
import ModalTemplate from "./ModalTemplate.vue";

export default defineComponent({
  components: { ModalTemplate },
  setup() {
    const { setUserName } = useUserStore();

    const formName = ref("");
    const handleSubmit = () => {
      if (!formName.value) return;
      setUserName(formName.value);
    };
    return { formName, handleSubmit };
  }
});
</script>

<style scoped></style>
