import { Game, TileNames } from "../client/types";
import { Server, Socket } from "socket.io";

const gameState: Game = {
  id: "123",
  boards: [
    {
      id: "4123546gfds",
      name: "alex",
      patternLines: [{ color: TileNames.BLACK, numTiles: 1, tilesFilled: 0 }],
      wall: Array(25).fill(false),
      penalties: [TileNames.ONE]
    }
  ],
  tilesDiscarded: [TileNames.ONE],
  potTiles: [],
  circles: [[TileNames.ONE]]
};

const ioRouter = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("a user connected");
    socket.emit("update", gameState);
  });
};

module.exports = ioRouter;
