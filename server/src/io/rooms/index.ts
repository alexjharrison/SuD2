import { Room, User } from "common/types";

export const rooms: Room[] = [];

export const joinRoom = (user: User, gameId: string): Room => {
  const gameRoom = rooms.find(room => room.gameId === gameId);

  if (!gameRoom) {
    rooms.push({ users: [user], gameId });
    return rooms[rooms.length - 1];
  } else {
    gameRoom.users.push(user);
    return gameRoom;
  }
};

export const roomByUserId = (userId: string) =>
  rooms.find(room => room.users.find(user => user.id === userId));

export const roomByGameId = (gameId: string) =>
  rooms.find(room => room.gameId === gameId);

export const removeRoomByGameId = (gameId: string) => {
  const roomIndex = rooms.findIndex(room => room.gameId === gameId);
  if (roomIndex === undefined) throw new Error("room not found");
  rooms.slice(roomIndex, 1);
};
