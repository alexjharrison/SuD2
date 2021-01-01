import { io } from "socket.io-client";
import { reactive } from "vue";
import { Game } from "../../../common/types";

const gameState = reactive<Game>({
  id: "placeholder",
  boards: [],
  tilesDiscarded: [],
  circles: [[]],
  potTiles: []
});

const socket = io();
export function useSocket(): Game {
  socket.on("update", (updatedGameState: Game) => {
    gameState.id = updatedGameState.id;
    gameState.boards = updatedGameState.boards;
    gameState.tilesDiscarded = updatedGameState.tilesDiscarded;
    gameState.circles = updatedGameState.circles;
    gameState.potTiles = updatedGameState.potTiles;
  });

  return gameState;
}
