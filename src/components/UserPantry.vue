<template>
  <h1>Dein Pantry</h1>
  <div>
    <table>
      <tr>
        <th>Zutat</th>
        <th>Pantry</th>
        <th>Ablaufdatum</th>
        <th>Aktionen</th>
      </tr>
      <tr v-for="ing in ingredients" :key="ing.uniqueIngredientID">
        <td>{{ ing.ingredientID }}</td>
        <td>{{ ing.pantryID }}</td>
        <td>{{ ing.expirationDate }}</td>
        <td>
          <button @click="deleteIng(ing.uniqueIngredientID)">Löschen</button>
        </td>
      </tr>
    </table>
    <AddIngredient></AddIngredient>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useFetch from "@/service/useFetch";
import { UNQINGREDIENT_ENDPOINT, DELETE_UNQING_ENDPOINT } from "@/constants";
import AddIngredient from "@/components/AddIngredient.vue";

const ingredients = ref([]);

const fetch = async () => {
  console.log("mount!");
  const currentUser = localStorage.getItem("user")
  const parsedUser = JSON.parse(currentUser || "");
  const data = await useFetch(UNQINGREDIENT_ENDPOINT.concat(parsedUser.userID), "GET");
  ingredients.value = data;
};

const deleteIng = async (unqIngID: number) => {
  await useFetch(DELETE_UNQING_ENDPOINT.concat(unqIngID.toString()), "DELETE");
};

onMounted(fetch);
</script>

<style scoped></style>
