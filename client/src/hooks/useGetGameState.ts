import { reactive } from "vue";
import { Game, TileNames } from "../../types";

const gameState = reactive<Game>({
  id: "123",
  boards: [
    {
      id: "4123546gfds",
      name: "alex",
      patternLines: [{ color: TileNames.BLACK, numTiles: 1, tilesFilled: 0 }],
      wall: Array(25).fill(false),
      penalties: [TileNames.ONE]
    }
  ],
  tilesDiscarded: [TileNames.ONE],
  potTiles: [],
  circles: [[TileNames.ONE]]
});

export function useGetGameState(): { gameState: Game } {
  return { gameState };
}

/*
export interface IPatternLine {
  color: undefined | TileNames;
  numTiles: number;
  tilesFilled: number;
}

export interface Board {
  id: string;
  name: string;
  patternLines: PatternLine[];
  wall: boolean[];
  penalties: TileNames[];
}

// both circle, pot, & bag
export interface TileReceptacle {
  tiles: TileNames[];
}

export interface Game {
  id: string;
  boards: Board[];
  tilesDiscarded: TileNames[];
  potTiles: TileNames[];
  factoryDisplays: TileReceptacle[];
}
*/
