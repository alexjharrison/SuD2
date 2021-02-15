import { useGameStore } from "@/store/game";
import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { Socket } from "socket.io-client";
import { useRouter } from "vue-router";
import { clientSockets } from "./socketEvents";

export function socketListeners(socket: Socket): void {
  clientSockets.updateGameState.on(({ gameState }) => {
    console.log({ gameState });
    const game = useGameStore();
    game.setGame(gameState);
  });

  clientSockets.updateRoomState.on(({ roomState }) => {
    const room = useRoomStore();
    room.setRoom(roomState);
  });

  clientSockets.updateUserId.on(payload => {
    console.log(payload);
    const user = useUserStore();
    user.setUserId(payload.id);
  });

  clientSockets.gameStarted.on(({ game }) => {
    const router = useRouter();
    router.push(`/game/${game.id}`);
  });
}
