<template>
  <h1>Dein Pantry</h1>
  <div class="api-text">
    <RecipeComponent />
  </div>
  <div>
    <table>
      <tr>
        <th>Zutat</th>
        <th>Aktion</th>
      </tr>
      <tr v-for="ing in uniqueIngredients" :key="ing.uniqueIngredientID">
        <td>
          <IngredientComponent
            :ingredientID="ing.ingredientID"
            :uniqueIngredientExperationDate="ing.expirationDate"
          />
        </td>
        <td>
          <button v-if="ing" @click="deleteIngredient(ing.uniqueIngredientID)">
            Löschen TEST!
          </button>
        </td>
      </tr>
    </table>
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
</script>

<style scoped>
.api-text {
  width: 600px;
}
</style>
