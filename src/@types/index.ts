export type UserStatus = {
  loggedIn: boolean;
  userName: string;
  userPassword: string;
  userID: number;
};

export interface PantryStore {
  uniqueIngredients: UniqueIngredient[];
}

export type UniqueIngredient = {
  uniqueIngredientID: number;
  pantryID: string;
  ingredientID: number;
  expirationDate: Date;
  name?: string;
};

export type Ingredient = {
  ingredientID: number;
  ingredientName: string;
  validNoOfDays: number;
  imageURL: string;
};
