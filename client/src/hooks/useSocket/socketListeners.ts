import { useGameStore } from "@/store/game";
import { useRoomStore } from "@/store/room";
import { useUserStore } from "@/store/user";
import { Events, Game, Room } from "common/types";
import { Socket } from "socket.io-client";
import { useRouter } from "vue-router";

export function socketListeners(socket: Socket): void {
  socket.on(Events.UPDATE_GAME_STATE, (updatedGameState: Game) => {
    const game = useGameStore();
    game.setGame(updatedGameState);
  });

  socket.on(Events.UPDATE_ROOM_STATE, (updatedRoomState: Room) => {
    const room = useRoomStore();
    room.setRoom(updatedRoomState);
  });

  socket.on(Events.UPDATE_USER_ID, (id: string) => {
    const user = useUserStore();
    user.setUserId(id);
  });

  socket.on(Events.GAME_STARTED, (game: Game) => {
    const router = useRouter();
    router.push(`/game/${game.id}`);
  });
}
