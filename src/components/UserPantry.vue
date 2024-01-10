<template>
  <div class="container mt-5">
    <h1 class="mb-4">Dein Pantry</h1>
    <div class="api-text">
      <RecipeComponent />
    </div>
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Zutat</th>
            <th scope="col">Ablaufdatum</th>
            <th scope="col">Aktion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ing in uniqueIngredients" :key="ing.uniqueIngredientID">
            <td>
              <IngredientComponent :ingredientID="ing.ingredientID" />
            </td>
            <td class="text-center" style="vertical-align: middle">
              <span>{{ dateTransform(ing.expirationDate) }}</span>
            </td>

            <td class="text-center" style="vertical-align: middle">
              <button
                v-if="ing"
                @click="deleteIngredient(ing.uniqueIngredientID)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import RecipeComponent from "@/components/RecipeComponent.vue";
import IngredientComponent from "@/components/IngredientComponent.vue";
import { onMounted, ref, type Ref } from "vue";
import { useFetch } from "@vueuse/core";
import {
  UNIQUE_INGREDIENTS_USER_ENDPOINT,
  DELETE_UNIQUE_INGR_TEST,
} from "@/constants";
import { pantryStore } from "@/store";
import type { UniqueIngredient } from "@/@types";

const pantry = pantryStore();
const user = JSON.parse(localStorage.getItem("user") ?? "");
const uniqueIngredients = ref([]) as Ref<UniqueIngredient[]>;

uniqueIngredients.value = pantry.getUniqueIngredients;

const deleteIngredient = async (unqIngIDToRemove: number) => {
  useFetch(`${DELETE_UNIQUE_INGR_TEST}${unqIngIDToRemove}`).delete();
  uniqueIngredients.value = uniqueIngredients.value.filter(
    (ing) => ing.uniqueIngredientID !== unqIngIDToRemove
  );
};

onMounted(async () => {
  try {
    const response = await useFetch(
      `${UNIQUE_INGREDIENTS_USER_ENDPOINT}${user.userID}`
    )
      .get()
      .json();
    //add response to pantryStore!
    uniqueIngredients.value = response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
// transform date!
const dateTransform = (date: Date) => {
  date = new Date(date);
  return date.toLocaleDateString();
};
</script>

<style scoped>
.api-text {
  width: 600px;
}
</style>
