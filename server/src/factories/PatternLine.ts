import { PatternLine, TileNames } from "common/types";

export const createPatternLine = (numTiles: number): PatternLine => ({
  numTiles,
  tilesFilled: 0,
  color: TileNames.GRAY
});
