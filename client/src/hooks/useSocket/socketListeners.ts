import { useGameStore } from "@/store/game";
import { useRoomStore } from "@/store/room";
import { Events, Game, Room } from "common/types";
import { Socket } from "socket.io-client";

export function socketListeners(socket: Socket): void {
  socket.on(Events.UPDATE_GAME_STATE, (updatedGameState: Game) => {
    const game = useGameStore();
    game.setGame(updatedGameState);
  });

  socket.on(Events.UPDATE_ROOM_STATE, (updatedRoomState: Room) => {
    const room = useRoomStore();
    room.setRoom(updatedRoomState);
  });
}
