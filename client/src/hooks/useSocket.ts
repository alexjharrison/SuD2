import { useGameStore } from "@/store/game";
import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { Events, Game, Room } from "common/types";
import { io } from "socket.io-client";

const socket = io();

interface UseSocket {
  joinGame: (gameId: string) => void;
}

// INIT SOCKET LISTENERES
socket.on(Events.UPDATE_GAME_STATE, (updatedGameState: Game) => {
  const game = useGameStore();
  game.setGame(updatedGameState);
});

socket.on(Events.UPDATE_ROOM_STATE, (updatedRoomState: Room) => {
  const room = useRoomStore();
  room.setRoom(updatedRoomState);
});

export function useSocket(): UseSocket {
  function joinGame(gameId: string): void {
    const user = useUserStore();
    socket.emit(Events.JOIN_SOCKET_ROOM, { user, gameId });
  }

  return { joinGame };
}
