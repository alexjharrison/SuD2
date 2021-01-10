import { v4 as uuidv4 } from "uuid";
import { Ref, ref } from "vue";

export function useSetId(): { id: Ref<string> } {
  const savedId = localStorage.getItem("id");

  if (savedId) {
    return { id: ref(savedId) };
  } else {
    const newId = uuidv4();
    localStorage.setItem("id", newId);
    return { id: ref(newId) };
  }
}
