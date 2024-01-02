<template>
  <h1>Arsenal der Zutaten</h1>
  <h2>Füge deine Zutaten zu deinem Pantry dazu!</h2>
  <div v-for="ing in ingredients" :key="ing.ingredientID">
    <IngredientComponent :ingredientID="ing.ingredientID" />
    <button @click="insertIngredients(ing.ingredientID, pantryID)">Add</button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue";
import IngredientComponent from "./IngredientComponent.vue";
import useFetch from "@/service/useFetch";
import {
  INGREDIENTS_ENDPOINT,
  POST_UNQING_ENDPOINT,
  USER_PANTRY_ENDPOINT,
} from "@/constants";

const ingredients = ref([]) as any;
const pantryID = ref(0);
const instance = getCurrentInstance();
console.log("instance", instance);

const findPantry = async () => {
  const currentUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(currentUser ?? "");

  const data = await useFetch(
    USER_PANTRY_ENDPOINT.concat(parsedUser.userID),
    "GET"
  );
  pantryID.value = data.pantryID;
};

const fetchAllIngredients = async () => {
  const data = await useFetch(INGREDIENTS_ENDPOINT, "GET");
  ingredients.value = data;
};

const insertIngredients = async (ingredientID: number, pantryID: number) => {
  const body = {
    pantryID: pantryID,
    ingredientID: ingredientID,
  };
  await useFetch(POST_UNQING_ENDPOINT, "POST", body);
};

onMounted(fetchAllIngredients);
onMounted(findPantry);
</script>

<style scoped></style>
