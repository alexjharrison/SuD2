import { SocketActionTitles, SocketEventArgs } from "common/socketEvents";
import { Socket } from "socket.io";
import { gameStartedSocket } from "./gameStarted";
import { joinSocketRoomSocket } from "./joinSocketRoom";

export type SocketActionFn<T> = (socket: Socket) => (message: T) => void;

interface WrappedServerSocket<T> {
  event: SocketActionTitles;
  callback: SocketActionFn<T>;
}

export function createSocket<T>(
  event: SocketActionTitles,
  callback: SocketActionFn<T>
): WrappedServerSocket<T> {
  return { event, callback };
}

export const registeredSocketEvents: WrappedServerSocket<any>[] = [
  joinSocketRoomSocket(),
  gameStartedSocket()
];
