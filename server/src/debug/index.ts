import { Game, User } from "common/types";
import { createGame } from "~/factories/Game";

export function createFakeGame(user: User): Game {
  const players = [
    user,
    { name: "joe", id: "fdsaf" },
    { name: "frank", id: "fdfdsa" },
    { name: "mabel", id: "fdfdsafds" }
  ];

  return createGame(players, "uniqueid");
}
