<template>
  <h1>Dein Pantry</h1>
  <div>
    <table>
      <tr>
        <th>Zutat</th>
        <th>Aktion</th>
      </tr>
      <tr v-for="ing in ingredients" :key="ing.uniqueIngredientID">
        <td>
          <IngredientComponent
            :ingredientID="ing.ingredientID"
            :expirationDate="ing.expirationDate"
          />
        </td>
        <td>
          <button @click="addToRemove(ing.uniqueIngredientID)">Löschen</button>
        </td>
      </tr>
    </table>
    <button @click="deleteIngredient()">Fertig!</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useFetch from "@/service/useFetch";
import { UNQINGREDIENT_ENDPOINT, DELETE_UNQING_ENDPOINT } from "@/constants";
import IngredientComponent from "@/components/IngredientComponent.vue";

const ingredients = ref([]) as any;
const ingredientToRemove = ref([]) as any;
const currentUser = localStorage.getItem("user");
const parsedCurrentUser = JSON.parse(currentUser ?? "");
const fetch = async () => {
  console.log("mount!");

  const data = await useFetch(
    UNQINGREDIENT_ENDPOINT.concat(parsedCurrentUser.userID),
    "GET"
  );
  ingredients.value = data;
};

const deleteIngredient = async () => {
  await useFetch(DELETE_UNQING_ENDPOINT, "DELETE", {
    UnqIDs: ingredientToRemove.value,
  });
};

const addToRemove = (unqIngIDToRemove: number) => {
  ingredientToRemove.value.push(unqIngIDToRemove);

  const index = ingredients.value.findIndex(
    (ing: { uniqueIngredientID: number }) =>
      ing.uniqueIngredientID === unqIngIDToRemove
  );
  console.log("index", index);
  if (index > -1) {
    ingredients.value.splice(index, 1);
  }
};
onMounted(fetch);
</script>

<style scoped></style>
