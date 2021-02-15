import {
  SocketActionTitles,
  SocketEventToServerArgs
} from "common/socketEvents";
import { User } from "common/types";
import { v4 } from "uuid";
import { createSocket } from ".";
import { io } from "..";
import { joinRoom, roomByUserId } from "../rooms";

export const joinSocketRoomSocket = () =>
  createSocket<SocketEventToServerArgs["JOIN_SOCKET_ROOM"]>(
    SocketActionTitles["JOIN_SOCKET_ROOM"],
    socket => ({ name, gameId, userId }) => {
      if (userId) {
        const myRoom = roomByUserId(userId);
        if (myRoom) {
          socket.emit(SocketActionTitles.UPDATE_ROOM_STATE, myRoom);
          socket.join(myRoom.gameId);
        } else
          socket.emit(SocketActionTitles.UPDATE_USER_ID, { id: undefined });
        return;
      }

      const newUser: User = { name, id: v4() };
      console.log(`user ${name} joined game ${gameId}`);

      const myRoom = joinRoom(newUser, gameId);
      socket.emit(SocketActionTitles.UPDATE_USER_ID, { id: newUser.id });

      socket.join(myRoom.gameId);
      io.to(myRoom.gameId).emit(SocketActionTitles.UPDATE_ROOM_STATE, myRoom);
    }
  );
