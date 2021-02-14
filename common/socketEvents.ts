import { Room } from "./types";

export enum SocketActionTitles {
  GAME_INITIALIZED = "GAME_INITIALIZED",
  JOIN_SOCKET_ROOM = "JOIN_SOCKET_ROOM",
  GAME_STARTED = "GAME_STARTED",
  PLAYER_MOVED = "PLAYER_MOVED",
  UPDATE_GAME_STATE = "UPDATE_GAME_STATE",
  UPDATE_ROOM_STATE = "UPDATE_ROOM_STATE",
  UPDATE_USER_ID = "UPDATE_USER_ID",
  RESET_SERVER = "RESET_SERVER"
}

export interface SocketEventArgs {
  [SocketActionTitles.JOIN_SOCKET_ROOM]: {
    name: string;
    gameId: string;
    userId?: string;
  };
  [SocketActionTitles.GAME_STARTED]: {
    room: Room;
  };
}

// function blah({ name, gameId }: SocketEventArgs["JOIN_SOCKET_ROOM"]) {
//   console.log({ name, gameId });
// }

// export interface SocketActionTitleMap {
//   [SocketActionTitles.UPDATE_GAME_STATE]: any;
// }

// type SocketActionTitleMap = {
//   [thingName in SocketActionTitle]: any;
// };

// export type SocketActionTitle =
//   | "GAME_INITIALIZED"
//   | "JOIN_SOCKET_ROOM"
//   | "GAME_STARTED"
//   | "PLAYER_MOVED"
//   | "UPDATE_GAME_STATE"
//   | "UPDATE_ROOM_STATE"
//   | "UPDATE_USER_ID"
//   | "RESET_SERVER";

// export interface SocketEventsArgs {
//   PLAYER_MOVED: {
//     name: string;
//     gameId: string;
//     userId?: string;
//   };
// }

// const blah2 = (): SocketEventsArgs["PLAYER_MOVED"] => ({
//   name: "fa",
//   gameId: "d"
// });

// export interface SocketEventsArgs extends SocketActionTitleMap {
//   t: {
//     name: string;
//     gameId: string;
//     userId?: string;
//   };
// }
