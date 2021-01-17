import { Board, PatternLine, User } from "common/types";
import { createPatternLine } from "./PatternLine";

export function createBoard(user: User): Board {
  const patternLines: PatternLine[] = Array(5)
    .fill(null)
    .map((_, idx) => createPatternLine(idx + 1));

  return {
    id: user.id,
    name: user.name,
    score: 0,
    patternLines,
    wall: Array(25).fill(false),
    penalties: []
  };
}
