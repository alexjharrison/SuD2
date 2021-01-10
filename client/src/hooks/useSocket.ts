import { useGameStore } from "@/store/game";
import { Game } from "common/types";
import { io } from "socket.io-client";
import { reactive } from "vue";

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
    const game = useGameStore();
    game.setGame(updatedGameState);
  });

  return gameState;
}
