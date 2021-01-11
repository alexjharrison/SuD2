import { onBeforeUnmount, onMounted, ref, Ref } from "vue";

export function useElementWidth(
  el: Ref<HTMLElement>
): { elementWidth: Ref<number | undefined> } {
  const elementWidth = ref<number>();

  function handleResize() {
    elementWidth.value = el.value.clientWidth;
  }

  onMounted(() => {
    elementWidth.value = el.value.clientWidth;
    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { elementWidth };
}
