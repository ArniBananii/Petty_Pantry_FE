export type UserStatus = {
  loggedIn: boolean;
  userName: string;
  userPassword: string;
  userID: number;
};

export interface PantryStore {
  uniqueIngredients: uniqueIngredient[];
}

export type uniqueIngredient = {
  uniqueIngredientID: number;
  pantryID: string;
  ingredientID: number;
  expirationDate: Array<number>;
};
