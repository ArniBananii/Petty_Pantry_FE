<template>
  <h1>Dein Pantry</h1>
  <div>
    <table>
      <tr>
        <th>Zutat</th>
        <th>Aktion</th>
      </tr>
      <tr v-for="ing in uniqueIngredients" :key="ing.uniqueIngredientID">
        <td>
          <IngredientComponent :ingredientID="ing.ingredientID" />
        </td>
        <td>
          <button v-if="ing" @click="deleteIngredient(ing.uniqueIngredientID)">
            Löschen TEST!
          </button>
        </td>
      </tr>
    </table>
    <!-- <button @click="deleteIngredient()">Fertig!</button> -->
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUpdated, ref, type Ref } from "vue";
import { useFetch } from "@vueuse/core";
import {
  DELETE_UNQING_ENDPOINT,
  UNIQUE_INGREDIENTS_USER_ENDPOINT,
  DELETE_UNIQUE_INGR_TEST,
} from "@/constants";
import IngredientComponent from "@/components/IngredientComponent.vue";
import { pantryStore } from "@/store";
import type { uniqueIngredient } from "@/@types";

const pantry = pantryStore();
const user = JSON.parse(localStorage.getItem("user") ?? "");
const uniqueIngredients = ref([]) as Ref<uniqueIngredient[]>;

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

    console.log("uniqueData", response.data.value);
    console.log("pantry.getUniqueIngredients", pantry.getUniqueIngredients);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped></style>
