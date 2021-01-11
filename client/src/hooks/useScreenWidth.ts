import { onBeforeMount, onBeforeUnmount, Ref, ref } from "vue";

export function useScreenWidth(): { screenWidth: Ref<number> } {
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
