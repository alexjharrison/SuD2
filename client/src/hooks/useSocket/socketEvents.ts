import { SocketActionTitles } from "common/socketEvents";
import { createSocket } from "./socketClientWrapper";

// initialize typed events here
export const clientSockets = {
  joinSocketRoom: createSocket<SocketActionTitles.JOIN_SOCKET_ROOM>(
    SocketActionTitles.JOIN_SOCKET_ROOM
  ),
  gameStarted: createSocket<SocketActionTitles.GAME_STARTED>(
    SocketActionTitles.GAME_STARTED
  ),
  playerMoved: createSocket<SocketActionTitles.PLAYER_MOVED>(
    SocketActionTitles.PLAYER_MOVED
  ),
  updateGameState: createSocket<SocketActionTitles.UPDATE_GAME_STATE>(
    SocketActionTitles.UPDATE_GAME_STATE
  ),
  updateRoomState: createSocket<SocketActionTitles.UPDATE_ROOM_STATE>(
    SocketActionTitles.UPDATE_ROOM_STATE
  ),
  updateUserId: createSocket<SocketActionTitles.UPDATE_USER_ID>(
    SocketActionTitles.UPDATE_USER_ID
  ),
  resetServer: createSocket<SocketActionTitles.RESET_SERVER>(
    SocketActionTitles.RESET_SERVER
  )
};
