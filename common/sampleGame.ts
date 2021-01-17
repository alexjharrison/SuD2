import { Game, TileNames } from "./types";

export const gameState: Game = {
  id: "123",
  boards: [
    {
      id: "85119ddc-8d3f-4694-9591-d85afcafe3cc",
      name: "alex",
      score: 123,
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({
          color: TileNames.BLUE,
          numTiles: i + 1,
          tilesFilled: 3
        })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    },
    {
      id: "4123546gfds",
      name: "alex",
      score: 123,
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({
          color: TileNames.BLACK,
          numTiles: i + 1,
          tilesFilled: 1
        })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    },
    {
      id: "4123546gfds",
      name: "alex",
      score: 123,
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({
          color: TileNames.BLUE,
          numTiles: i + 1,
          tilesFilled: 1
        })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    },
    {
      id: "4123546gfds",
      name: "alex harrison",
      score: 123,
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({
          color: TileNames.BLUE,
          numTiles: i + 1,
          tilesFilled: 1
        })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    }
  ],
  tilesDiscarded: [TileNames.RED],
  potTiles: [
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW,
    TileNames.RED,
    TileNames.YELLOW
  ],
  circles: [
    [TileNames.RED, TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW],
    [TileNames.SNOW, TileNames.RED, TileNames.YELLOW, TileNames.BLACK],
    [TileNames.BLACK, TileNames.SNOW, TileNames.RED, TileNames.YELLOW],
    [TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW, TileNames.RED],
    [TileNames.ONE, TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW],
    [TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW, TileNames.RED],
    [TileNames.ONE, TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW],
    [TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW, TileNames.RED],
    [TileNames.ONE, TileNames.YELLOW, TileNames.BLACK, TileNames.SNOW]
  ],
  bagTiles: []
};
