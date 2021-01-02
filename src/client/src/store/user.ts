import { defineStore } from "pinia";
import { User } from "../../../common/types";
import { v4 as uuidv4 } from "uuid";

export const useUserStore = defineStore({
  id: "user",
  state: (): User => ({
    id: null,
    name: null
  }),
  actions: {
    fetchUser() {
      this.id = localStorage.getItem("id");
      this.name = localStorage.getItem("name");
    },
    setUser(name: string) {
      this.id = uuidv4();
      this.name = name;
      localStorage.setItem("id", this.id);
      localStorage.setItem("name", this.name);
    },
    reset() {
      this.id = null;
      this.name = null;
      localStorage.removeItem("id");
      localStorage.removeItem("name");
    }
  }
});
