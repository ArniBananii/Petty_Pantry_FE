<template>
  <div v-if="uniqueIngredients.length === 0" class="text-center" style="background-color: #181818; padding: 20px; border-radius: 15px; margin: 0 -20px; width: 100%">
    <h2 style="color: coral">You dont have any ingredients in your Pantry yet!</h2>
    <h2 style="color: white">Go add some under 'Add Ingredients'</h2>
  </div>
  <div v-if="uniqueIngredients.length > 0" class="container">
    <div class="row">
      <div class="col">
        <table class="table table-borderless" style="border: none">
          <thead class="text-center">
          <tr>
            <th style="background-color: coral; color: white" scope="col">
              Ingredient
            </th>
            <th style="background-color: coral; color: white" scope="col">
              Expiration-Date
            </th>
            <th style="background-color: coral; color: white" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ing in uniqueIngredients" :key="ing.uniqueIngredientID">
            <td
              class="text-center base-color"
              style="vertical-align: middle"
              :class="{ 'week-color' : isExperationThisWeek(ing), 'day-color' : isExperationToday(ing) }"
            >
              <IngredientComponent :ingredientID="ing.ingredientID" />
            </td>
            <td
              class="text-center base-color"
              style="
                vertical-align: middle;
                color: white"
              :class="{ 'week-color' : isExperationThisWeek(ing), 'day-color' : isExperationToday(ing) }"
            >
              <span>{{ dateTransform(ing.expirationDate) }}</span>
            </td>

            <td
              class="text-center base-color"
              style="vertical-align: middle"
              :class="{ 'week-color' : isExperationThisWeek(ing), 'day-color' : isExperationToday(ing) }"
            >
              <button
                  v-if="ing"
                  @click="deleteIngredient(ing.uniqueIngredientID)"
                  class="btn"
                  style="background-color: coral; color: white"
              >
                Delete
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="api-text col">
        <RecipeComponent
          v-if="uniqueIngredients.length > 0"
          :uniqueIngredients="uniqueIngredients"
        />
      </div>
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
import {isExperationThisWeek, isExperationToday} from "@/utils/checkExperation";

const pantry = pantryStore();
const user = JSON.parse(localStorage.getItem("user") ?? "");
const uniqueIngredients = ref([] as UniqueIngredient[]) as Ref<
  UniqueIngredient[]
>;

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
.base-color {
  background-color: #181818;
}

.week-color {
  background-color: darkgoldenrod;
}

.day-color {
  background-color: darkred;
}

.api-text {
  width: 600px;
}
</style>
