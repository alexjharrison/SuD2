import {
  SocketActionTitles,
  SocketEventToClientArgs,
  SocketEventToServerArgs
} from "common/socketEvents";
import { Socket } from "socket.io-client";
import Emitter from "component-emitter";
import { socket } from ".";

interface EmitterCallback<T extends keyof SocketEventToClientArgs> {
  (data: SocketEventToClientArgs[T]): void;
}

interface WrappedSocketClient<T extends keyof SocketEventToServerArgs> {
  emit: (data: SocketEventToServerArgs[T]) => Socket;
  on: (callback: EmitterCallback<T>) => Emitter<SocketActionTitles>;
}

export function createSocket<T extends keyof SocketEventToServerArgs>(
  event: SocketActionTitles
): WrappedSocketClient<T> {
  return {
    emit: data => socket.emit(event, data),
    on: callback => socket.on(event, callback)
  };
}
