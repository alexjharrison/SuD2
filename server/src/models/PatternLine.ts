import { PatternLine, TileNames } from "common/types";

// export function createPatternLine(numTiles: number): IPatternLine {
//   return {
//     numTiles,
//     tilesFilled: 0,
//     color: undefined
//   };
// }

export const createPatternLine = (numTiles: number): PatternLine => ({
  numTiles,
  tilesFilled: 0,
  color: TileNames.GRAY
});

// export class PatternLine implements IPatternLine {
//   constructor(
//     public numTiles: number,
//     public tilesFilled = 0,
//     public color = undefined
//   ) {
//     this.numTiles = numTiles;
//   }
// }
