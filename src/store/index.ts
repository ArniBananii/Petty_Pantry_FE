import { defineStore } from "pinia";

type UserStatus = {
  loggedIn: boolean;
  userName: string;
  userPassword: string;
};

export const userStore = defineStore("userStore", {
  state: () => ({
    userState: {
      loggedIn: false,
      userName: "",
      userPassword: "",
    } as UserStatus,
  }),
  actions: {
    login(userName: string, userPassword: string) {
      this.userState.userName = userName;
      this.userState.userPassword = userPassword;
      this.userState.loggedIn = true;
    },
    logout() {
      this.userState.loggedIn = false;
      this.userState.userName = "";
      this.userState.userPassword = "";
    },
  },
  getters: {
    isLoggedIn(): boolean {
      return this.userState.loggedIn;
    },
    user(): UserStatus {
      return this.userState;
    },
  },
});
