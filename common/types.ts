export enum TileNames {
  BLACK = "black",
  YELLOW = "yellow",
  SNOW = "snow",
  ONE = "one",
  BLUE = "blue",
  RED = "red",
  GRAY = "gray"
}

export enum Events {
  GAME_INITIALIZED = "GAME_INITIALIZED",
  JOIN_SOCKET_ROOM = "JOIN_SOCKET_ROOM",
  GAME_STARTED = "GAME_STARTED",
  PLAYER_MOVED = "PLAYER_MOVED",
  UPDATE_GAME_STATE = "UPDATE_GAME_STATE",
  UPDATE_ROOM_STATE = "UPDATE_ROOM_STATE"
}

export enum Gamestates {
  ADDING_PLAYERS,
  AWAITING_PLAYER_INPUT,
  ROUND_ENDED,
  GAME_ENDED
}

export interface PatternLine {
  color: TileNames;
  numTiles: number;
  tilesFilled: number;
}

export interface Board {
  id: string;
  name: string;
  score: number;
  patternLines: PatternLine[];
  wall: boolean[];
  penalties: TileNames[];
}

export interface Game {
  id: string;
  boards: Board[];
  tilesDiscarded: TileNames[];
  potTiles: TileNames[];
  bagTiles: TileNames[];
  circles: TileNames[][];
}

export interface User {
  id: string;
  name: string;
}

export interface Room {
  users: User[];
  gameId: string;
}
