import { Room } from "common/types";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useRoomStore = defineStore({
  id: "room",
  state: (): { myRoom: Room | undefined } => ({
    myRoom: undefined
  }),
  actions: {
    setRoom(room: Room | undefined) {
      this.myRoom = room;
    },
    amIHost() {
      const user = useUserStore();
      return user.id === this.myRoom?.users[0].id;
    },
    reset() {
      this.myRoom = undefined;
    }
  }
});
