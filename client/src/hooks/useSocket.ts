import { useGameStore } from "@/store/game";
import { Events, Game, User } from "common/types";
import { io } from "socket.io-client";
import { reactive } from "vue";

const gameState = reactive<Game>({
  id: "placeholder",
  boards: [],
  tilesDiscarded: [],
  circles: [[]],
  potTiles: [],
  bagTiles: []
});

const socket = io();
export function useSocket() {
  socket.on("update", (updatedGameState: Game) => {
    const game = useGameStore();
    game.setGame(updatedGameState);
  });

  function startGame(user: User) {
    socket.emit(Events.GAME_STARTED, user);
  }

  return { startGame };
}
