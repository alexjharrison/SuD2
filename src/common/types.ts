export enum TileNames {
  BLACK = "black",
  YELLOW = "yellow",
  SNOW = "snow",
  ONE = "one",
  BLUE = "blue",
  RED = "red"
}

export interface PatternLine {
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

// export interface TileReceptacle {

// }

export interface Game {
  id: string;
  boards: Board[];
  tilesDiscarded: TileNames[];
  potTiles: TileNames[];
  circles: TileNames[][];
}

export interface User {
  id: string | null;
  name: string | null;
}
