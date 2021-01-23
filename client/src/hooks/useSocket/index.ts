import * as socketEvents from "./socketEvents";
import { io } from "socket.io-client";
import { socketListeners } from "./socketListeners";

export const socket = io();

// enable socket listeners
socketListeners(socket);

export function useSocket(): socketEvents.SocketEvents {
  return { ...socketEvents };
}
