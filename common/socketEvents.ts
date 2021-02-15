import { Game, Room } from "./types";

export enum SocketActionTitles {
  JOIN_SOCKET_ROOM = "JOIN_SOCKET_ROOM",
  GAME_STARTED = "GAME_STARTED",
  PLAYER_MOVED = "PLAYER_MOVED",
  UPDATE_GAME_STATE = "UPDATE_GAME_STATE",
  UPDATE_ROOM_STATE = "UPDATE_ROOM_STATE",
  UPDATE_USER_ID = "UPDATE_USER_ID",
  RESET_SERVER = "RESET_SERVER"
}

export interface SocketEventToServerArgs {
  [SocketActionTitles.JOIN_SOCKET_ROOM]: {
    name: string;
    gameId: string;
    userId?: string;
  };
  [SocketActionTitles.GAME_STARTED]: {
    room: Room;
  };
  [SocketActionTitles.UPDATE_GAME_STATE]: never;
  [SocketActionTitles.UPDATE_ROOM_STATE]: never;
  [SocketActionTitles.UPDATE_USER_ID]: never;
  [SocketActionTitles.PLAYER_MOVED]: never;
  [SocketActionTitles.RESET_SERVER]: never;
}

export interface SocketEventToClientArgs {
  [SocketActionTitles.GAME_STARTED]: {
    game: Game;
  };
  [SocketActionTitles.UPDATE_GAME_STATE]: {
    gameState: Game;
  };
  [SocketActionTitles.UPDATE_ROOM_STATE]: {
    roomState: Room;
  };
  [SocketActionTitles.UPDATE_USER_ID]: {
    id: string;
  };
  [SocketActionTitles.JOIN_SOCKET_ROOM]: never;
  [SocketActionTitles.PLAYER_MOVED]: never;
  [SocketActionTitles.RESET_SERVER]: never;
}
