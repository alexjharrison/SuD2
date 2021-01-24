import { Game, Room } from "common/types";
import { createGame } from "~/factories/Game";

const activeGames: Game[] = [];

export const startGame = (room: Room): Game => {
  // check if game is in progress and just update everyone
  const currentGame = activeGames.find(game => game.id === room.gameId);
  if (currentGame) return currentGame;

  const newGame = createGame(room.users, room.gameId);
  activeGames.push(newGame);
  return newGame;
};
