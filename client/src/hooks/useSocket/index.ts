import * as socketEvents from "./socketEvents";
import { io, Socket } from "socket.io-client";
import { socketListeners } from "./socketListeners";
import Emitter from "component-emitter";
import { SocketActionTitles } from "common/socketEvents";

export const socket = io();

interface EmitterCallback<T> {
  (data: T): void;
}

interface WrappedSocketClient<T> {
  emit: (data: T) => Socket;
  on: (callback: EmitterCallback<T>) => Emitter<SocketActionTitles>;
}

export function createSocket<T>(
  event: SocketActionTitles
): WrappedSocketClient<T> {
  return {
    emit: data => socket.emit(event, data),
    on: callback => socket.on(event, callback)
  };
}

// enable socket listeners
socketListeners(socket);

export function useSocket(): socketEvents.SocketEvents {
  return { ...socketEvents };
}
