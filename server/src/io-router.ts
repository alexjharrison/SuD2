import { Events, Game, User } from "common/types";
import { Server, Socket } from "socket.io";
import { createFakeGame } from "./debug";
import { createGame } from "./factories/Game";

const activeGames: Game[] = [];

export const ioRouter = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    const gameState = createFakeGame({ id: "456", name: "rando" });
    socket.emit("update", gameState);
  });
};
