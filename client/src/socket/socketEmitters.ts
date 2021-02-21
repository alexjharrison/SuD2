import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { clientSockets } from "./socketEvents";

export function joinRoom(gameId: string): void {
  const user = useUserStore();
  clientSockets.joinSocketRoom.emit({
    name: user.name,
    gameId,
    userId: user.id
  });
}

export function startGame(): void {
  const room = useRoomStore();
  if (!room.myRoom) return;
  clientSockets.gameStarted.emit({ room: room.myRoom });
}

// export function resetServer(): void {
//   socket.emit(Events.RESET_SERVER);
// }
