import { Server } from "http";
import { Socket, Server as ioServer } from "socket.io";
import { registeredSocketEvents } from "./events";

export let io: ioServer;

export const createSocketServer = (httpServer: Server) => {
  io = new ioServer(httpServer);

  io.on("connection", (socket: Socket) => {
    console.log("User Connected");

    registeredSocketEvents.forEach(({ event, callback }) => {
      socket.on(event, callback(socket));
    });
  });
};
