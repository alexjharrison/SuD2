import { onBeforeMount, onBeforeUnmount, ref } from "vue";

export function useScreenWidth() {
  const screenWidth = ref<number>(window.innerWidth);

  function handleResize() {
    screenWidth.value = window.innerWidth;
  }

  onBeforeMount(() => {
    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { screenWidth };
}
