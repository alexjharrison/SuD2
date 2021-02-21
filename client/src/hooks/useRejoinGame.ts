import { joinRoom, startGame } from "@/socket/socketEmitters";
import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useRejoinGame(): void {
  const route = useRoute();
  const router = useRouter();
  const user = useUserStore();
  const room = useRoomStore();

  onMounted(() => {
    user.fetchUser();
    joinRoom(String(route.params.id));
    setTimeout(() => {
      if (room.myRoom) startGame();
      else router.push("/");
    }, 1000);
  });
}
