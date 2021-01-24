import { defineStore } from "pinia";
import { User } from "common/types";

export const useUserStore = defineStore({
  id: "user",
  state: (): User => ({
    id: "",
    name: ""
  }),
  actions: {
    fetchUser() {
      this.id = localStorage.getItem("id") || "";
      this.name = localStorage.getItem("name") || "";
    },
    setUserName(name: string) {
      this.name = name;
      localStorage.setItem("name", this.name);
    },
    setUserId(id: string) {
      this.id = id;
      localStorage.setItem("id", this.id);
    },
    resetUser() {
      this.id = "";
      localStorage.removeItem("id");
    }
  }
});
