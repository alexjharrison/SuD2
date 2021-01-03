import { Server, Socket } from "socket.io";
import { Game, TileNames } from "../common/types";

const gameState: Game = {
  id: "123",
  boards: [
    {
      id: "85119ddc-8d3f-4694-9591-d85afcafe3cc",
      name: "alex",
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({ color: undefined, numTiles: i + 1, tilesFilled: 1 })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    },
    {
      id: "4123546gfds",
      name: "alex",
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({ color: undefined, numTiles: i + 1, tilesFilled: 1 })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    },
    {
      id: "4123546gfds",
      name: "alex",
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({ color: undefined, numTiles: i + 1, tilesFilled: 1 })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    },
    {
      id: "4123546gfds",
      name: "alex",
      patternLines: Array(5)
        .fill(null)
        .map((_, i) => ({ color: undefined, numTiles: i + 1, tilesFilled: 1 })),
      wall: Array(25).fill(false),
      penalties: [TileNames.SNOW]
    }
  ],
  tilesDiscarded: [TileNames.RED],
  potTiles: [TileNames.RED, TileNames.YELLOW],
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
  ]
};

export const ioRouter = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    gameState.boards[0].wall[2] = true;
    gameState.boards[0].wall[5] = true;
    gameState.boards[0].wall[6] = true;
    gameState.boards[0].wall[10] = true;
    gameState.boards[0].wall[22] = true;
    console.log("a user connected");
    socket.emit("update", gameState);
  });
};
