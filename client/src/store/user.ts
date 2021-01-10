import { defineStore } from "pinia";
import { User } from "common/types";
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

      if (!this.id) {
        this.setUser("bob");
      }
    },
    setUser(name: string, id = "85119ddc-8d3f-4694-9591-d85afcafe3cc") {
      this.id = id || uuidv4();
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
