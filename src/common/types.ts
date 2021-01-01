export enum TileNames {
  BLACK = "black",
  TEAL = "teal",
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

export interface Game {
  id: string;
  boards: Board[];
  tilesDiscarded: TileNames[];
  potTiles: TileNames[];
  circles: [TileNames[]];
}
