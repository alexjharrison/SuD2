import { Events, Game, Room, User } from "common/types";
import { Server } from "http";
import { Socket, Server as ioServer } from "socket.io";
import { v4 } from "uuid";
import { startGame } from "./games";
import { joinRoom, roomByUserId } from "./rooms";

export let io: ioServer;

export const createSocketServer = (httpServer: Server) => {
  io = new ioServer(httpServer);

  io.on("connection", (socket: Socket) => {
    console.log("User Connected");

    socket.on(
      Events.JOIN_SOCKET_ROOM,
      (name: string, gameId: string, userId?: string) => {
        if (userId) {
          const myRoom = roomByUserId(userId);
          if (myRoom) {
            socket.emit(Events.UPDATE_ROOM_STATE, myRoom);
            socket.join(myRoom.gameId);
          } else socket.emit(Events.UPDATE_USER_ID, undefined);
          return;
        }

        const newUser: User = { name, id: v4() };
        console.log(`user ${name} joined game ${gameId}`);

        const myRoom = joinRoom(newUser, gameId);
        socket.emit(Events.UPDATE_USER_ID, newUser.id);

        socket.join(myRoom.gameId);
        io.to(myRoom.gameId).emit(Events.UPDATE_ROOM_STATE, myRoom);
      }
    );

    socket.on(Events.GAME_STARTED, (room: Room): void => {
      const newGame = startGame(room);
      io.to(newGame.id).emit(Events.UPDATE_GAME_STATE, newGame);
    });
  });
};
