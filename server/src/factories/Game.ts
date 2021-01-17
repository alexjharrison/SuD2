import { Game, TileNames, User } from "common/types";
import { shuffleArray } from "~/utils";
import { createBoard } from "./Board";

export function createGame(users: User[], id: string): Game {
  const colors = [
    TileNames.BLACK,
    TileNames.BLUE,
    TileNames.SNOW,
    TileNames.RED,
    TileNames.YELLOW
  ];

  const bagTiles: TileNames[] = shuffleArray(
    colors.map(color => Array(20).fill(color)).flat()
  );

  const numCircles = 2 * users.length + 1;
  const circles: TileNames[][] = Array(numCircles)
    .fill(null)
    .map(() => bagTiles.splice(0, 4));

  return {
    id,
    boards: users.map(createBoard),
    tilesDiscarded: [],
    potTiles: [TileNames.ONE],
    bagTiles,
    circles
  };
}
