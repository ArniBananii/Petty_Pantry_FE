<template>
  <h1>Arsenal der Zutaten</h1>
  <h2>Füge deine Zutaten zu deinem Pantry dazu!</h2>
  <div v-for="ing in ingredients" :key="ing.ingredientID">
    <IngredientComponent :ingredientID="ing.ingredientID" />
    <button @click="insertIngredients(ing.ingredientID, pantryID)">Add</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import IngredientComponent from "./IngredientComponent.vue";
import { useFetch } from "@vueuse/core";
import {
  INGREDIENTS_ENDPOINT,
  POST_UNQING_ENDPOINT,
  USER_PANTRY_ENDPOINT,
} from "@/constants";
import type { Ingredient } from "@/@types";

const ingredients = ref([] as Ingredient[]) as Ref<Ingredient[]>;
const pantryID = ref(0) as Ref<number>;
const user = JSON.parse(localStorage.getItem("user") ?? "");

const insertIngredients = async (ingredientID: number, pantryID: number) => {
  const postBody = {
    pantryID: pantryID,
    ingredientID: ingredientID,
  };

  //const { execute } deconstructing to trigger the fetch when wanted!
  await useFetch(`${POST_UNQING_ENDPOINT}`).post(postBody);
};

onMounted(async () => {
  try {
    const ingredientResponse = await useFetch(`${INGREDIENTS_ENDPOINT}`)
      .get()
      .json();
    const uniquePantryIdResponse = await useFetch(
      `${USER_PANTRY_ENDPOINT}${user.userID}`
    )
      .get()
      .json();

    ingredients.value = ingredientResponse.data.value;
    pantryID.value = uniquePantryIdResponse.data.value.pantryID;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped></style>
