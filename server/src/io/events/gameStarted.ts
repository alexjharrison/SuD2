import { SocketActionTitles, SocketEventArgs } from "common/socketEvents";
import { createSocket } from ".";
import { io } from "..";
import { startGame } from "../games";

export const gameStartedSocket = () =>
  createSocket<SocketEventArgs["GAME_STARTED"]>(
    SocketActionTitles["GAME_STARTED"],
    socket => ({ room }) => {
      const newGame = startGame(room);
      io.to(newGame.id).emit(SocketActionTitles["UPDATE_GAME_STATE"], newGame);
    }
  );
