import { expect, test, vitest } from "vitest";
import { isExperationToday } from "@/utils/checkExperation";
import type { Ingredient, UniqueIngredient } from "@/@types";
import { useFetch } from "@vueuse/core";
import { INGREDIENTS_ENDPOINT } from "@/constants";
import { db } from "./db.Ingredients";
import { unref, type Ref } from "vue";

test("does isExperationToday find an ingredient that expired", () => {
  const uniqueIngredientToTest = {
    name: "IngredientToExpire",
    uniqueIngredientID: -1,
    ingredientID: -1,
    expirationDate: new Date(),
  } as UniqueIngredient;

  const result = isExperationToday(uniqueIngredientToTest);

  expect(result).toBe(true);
});

test("are all ingredients in our db fetched", async () => {
  console.log("INGREDIENTS_ENDPOINT", INGREDIENTS_ENDPOINT);

  const { data } = await useFetch<Ingredient[]>(INGREDIENTS_ENDPOINT)
    .get()
    .json();

  const unwrap = (x: Ingredient[] | Ref<Ingredient[]>) => {
    return unref(x);
  };

  const test = unwrap(data);
  console.log("test data= ", test);
  const fileContent = JSON.parse(JSON.stringify(db));

  expect(test).toMatchObject(fileContent);
});
