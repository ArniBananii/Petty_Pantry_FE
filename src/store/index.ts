import { defineStore } from "pinia";
import type { PantryStore, UserStatus, uniqueIngredient } from "@/@types";

export const userStore = defineStore("userStore", {
  state: () => ({
    userState: {
      loggedIn: false,
      userID: 0,
      userName: "",
      userPassword: "",
    } as UserStatus,
  }),
  actions: {
    login(
      userName: string,
      userPassword: string,
      userID: number,
      isLoggedIn: boolean
    ) {
      this.userState.userName = userName;
      this.userState.userPassword = userPassword;
      this.userState.userID = userID;
      this.userState.loggedIn = isLoggedIn;
    },
    logout() {
      this.userState.loggedIn = false;
      this.userState.userName = "";
      this.userState.userPassword = "";
      this.userState.userID = 0;
    },
  },
  getters: {
    isLoggedIn(): boolean {
      return this.userState.loggedIn;
    },
    getUserName(): string {
      return this.userState.userName;
    },
    getUserPassword(): string {
      return this.userState.userPassword;
    },
    getUserID(): number {
      return this.userState.userID;
    },
  },
});

export const pantryStore = defineStore("pantryStore", {
  state: () => ({
    pantryState: {
      uniqueIngredients: [],
    } as PantryStore,
  }),
  actions: {
    deleteUniqueIngredient(uniqueIngredientToDelete: uniqueIngredient) {
      const index = this.pantryState.uniqueIngredients.indexOf(
        uniqueIngredientToDelete
      );
      if (index > -1) {
        this.pantryState.uniqueIngredients.splice(index, 1);
      }
    },
    //may not be used!
    addUniqueIngredient(newIngredient: uniqueIngredient) {
      this.pantryState.uniqueIngredients.push(newIngredient);
    },
    isNow(uniqueIngredient: uniqueIngredient[]) {
      this.pantryState.uniqueIngredients = uniqueIngredient;
    },
  },
  getters: {
    getUniqueIngredients(): uniqueIngredient[] {
      return this.pantryState.uniqueIngredients;
    },
  },
});
