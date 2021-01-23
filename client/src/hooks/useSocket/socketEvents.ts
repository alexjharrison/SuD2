import { useUserStore } from "@/store/user";
import { Events } from "common/types";
import { socket } from ".";

export interface SocketEvents {
  joinGame: (gameId: string) => void;
}

export function joinGame(gameId: string): void {
  const user = useUserStore();
  socket.emit(Events.JOIN_SOCKET_ROOM, { user, gameId });
}
