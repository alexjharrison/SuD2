import { Room } from "common/types";
import { defineStore } from "pinia";

export const useRoomStore = defineStore({
  id: "room",
  state: (): { myRoom: Room | undefined } => ({
    myRoom: undefined
  }),
  actions: {
    setRoom(room: Room | undefined) {
      this.myRoom = room;
    }
  }
});
