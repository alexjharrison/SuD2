import { io } from "socket.io-client";
import { socketListeners } from "./socketListeners";

export const socket = io();

// enable socket listeners
socketListeners();

export function useSocket(): void {
  console.log("connected to socket");
}
