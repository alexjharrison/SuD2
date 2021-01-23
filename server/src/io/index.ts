import { Events, Game, Room, User } from "common/types";
import { Server, Socket } from "socket.io";
import { joinRoom } from "./rooms";

export const ioRouter = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("User Connected");
    // const gameState = createFakeGame({ id: "456", name: "rando" });
    // socket.emit("update", gameState);

    socket.on(Events.JOIN_SOCKET_ROOM, (user: User, gameId: string) => {
      console.log(`user ${user.name} joined game ${gameId}`);

      const myRoom = joinRoom(user, gameId);
      socket.join(myRoom.gameId);
      io.to(myRoom.gameId).emit(Events.UPDATE_ROOM_STATE, myRoom);
    });
  });
};
