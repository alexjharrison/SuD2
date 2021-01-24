import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { Events } from "common/types";
import { socket } from ".";

export interface SocketEvents {
  joinRoom: (gameId: string) => void;
  startGame: () => void;
}

export function joinRoom(gameId: string): void {
  const user = useUserStore();
  socket.emit(Events.JOIN_SOCKET_ROOM, user.name, gameId, user.id);
}

export function startGame(): void {
  const room = useRoomStore();
  socket.emit(Events.GAME_STARTED, room.myRoom);
}

// export function resetServer(): void {
//   socket.emit(Events.RESET_SERVER);
// }
