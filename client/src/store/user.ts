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
    setUserName(name: string, userId: string) {
      this.id = userId;
      this.name = name;
      localStorage.setItem("id", this.id);
      localStorage.setItem("name", this.name);
    },
    resetUser() {
      this.id = "";
      localStorage.removeItem("id");
    }
  }
});
