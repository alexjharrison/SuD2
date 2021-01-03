<template>
  <div
    ref="tile"
    class="bg-center bg-no-repeat bg-cover rounded-lg shadow-lg border-orange-dark"
    :style="style"
  ></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { TileNames } from "../../../../common/types";
import { useElementWidth } from "@/hooks/useElementWidth";

export default defineComponent({
  props: {
    isDisabled: { type: Boolean, default: false },
    isSelected: { type: Boolean, default: false },
    isSelectable: { type: Boolean, default: false },
    width: { type: String, required: false },
    maxWidth: { type: String, required: false },
    color: {
      type: String as PropType<TileNames | null>,
      default: TileNames.SNOW
    }
  },
  setup(props) {
    const width = computed(() => (props.width ? props.width : "8vw"));

    const tile = ref();
    const { elementWidth } = useElementWidth(tile);

    const style = computed(() => ({
      backgroundImage: `url(${require(`@/assets/images/${props.color}.svg`)})`,
      width: width.value,
      maxWidth: props.maxWidth ?? "auto",
      height: elementWidth.value + "px",
      opacity: props.isDisabled ? 0.2 : 1,
      margin: (elementWidth.value ?? 0) / 20 + "px",
      borderColor: props.isSelected ? "white" : "#ffffff22",
      borderWidth: `calc(${elementWidth.value} / 20)`,
      cursor: props.isSelectable ? "pointer" : "auto"
    }));

    return { style, tile };
  }
});
</script>
