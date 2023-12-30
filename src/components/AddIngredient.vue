<template>
  <h1>Arsenal der Zutaten</h1>
  <h2>Füge deine Zutaten zu deinem Pantry dazu!</h2>
  <div v-for="ing in ingredients" :key="ing.ingredientID">
    <button @click="insertIngredients(ing.ingredientID)">
      {{ ing.ingredientName }}
    </button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import useFetch from "@/service/useFetch";
import {INGREDIENTS_ENDPOINT, POST_UNQING_ENDPOINT, USER_PANTRY_ENDPOINT} from "@/constants";
import {userStore} from "@/store";

const ingredients = ref([]);
const user = userStore();
const pantryID = ref(null);

const fetch = async () => {
  const data = await useFetch(INGREDIENTS_ENDPOINT, "GET");
  ingredients.value = data;
};

const insertIngredients = async (ingredientID: number) => {
  const body = {
    pantryID: 12,
    ingredientID: ingredientID,
  };
  await useFetch(POST_UNQING_ENDPOINT, "POST", body);
};

const findPantry = async () => {
  const currentUser = localStorage.getItem("user")
  const parsedUser = JSON.parse(currentUser || "");
  pantryID.value = await useFetch(USER_PANTRY_ENDPOINT.concat(parsedUser.userID), "GET");
};

onMounted(fetch);
onMounted(findPantry);
</script>

<style scoped></style>
