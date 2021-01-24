import { defineStore } from "pinia";
import { Game } from "common/types";
import { useUserStore } from "./user";

export const useGameStore = defineStore({
  id: "game",
  state: (): Game => ({
    id: "placeholder",
    boards: [],
    tilesDiscarded: [],
    circles: [[]],
    potTiles: [],
    bagTiles: []
  }),
  getters: {
    myBoard() {
      const userStore = useUserStore();
      return this.boards.find(board => board.id === userStore.id);
    },
    otherBoards() {
      const userStore = useUserStore();
      return this.boards.filter(board => board.id !== userStore.id);
    }
  },
  actions: {
    setGame(game: Game) {
      this.id = game.id;
      this.boards = game.boards;
      this.tilesDiscarded = game.tilesDiscarded;
      this.circles = game.circles;
      this.potTiles = game.potTiles;
      this.bagTiles = game.bagTiles;
    },
    reset() {
      this.id = "placeholder";
      this.boards = [];
      this.tilesDiscarded = [];
      this.circles = [];
      this.potTiles = [];
      this.bagTiles = [];
    }
  }
});
