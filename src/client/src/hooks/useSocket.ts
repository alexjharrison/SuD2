import { useGameStore } from "@/store/game";
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
    const game = useGameStore();
    game.setGame(updatedGameState);
  });

  return gameState;
}
