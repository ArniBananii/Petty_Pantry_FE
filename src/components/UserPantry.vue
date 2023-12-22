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
          <td>{{ing.ingredientID}}</td>
          <td>{{ing.pantryID}}</td>
          <td>{{ing.expirationDate}}</td>
          <td>
            <button @click="deleteIng(ing.uniqueIngredientID)">Löschen</button>
          </td>
        </tr>
      </table>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import useFetch from "@/service/useFetch";
import {UNQINGREDIENT_ENDPOINT, DELETE_UNQING_ENDPOINT} from "@/constants";

const ingredients = ref([]);
const userID = '10';

const fetch = async () => {
  const data = await useFetch(UNQINGREDIENT_ENDPOINT.concat(userID), 'GET');
  ingredients.value = data;
};

const deleteIng = async (ungIngID: number) => {
  await useFetch(DELETE_UNQING_ENDPOINT.concat(ungIngID.toString()), 'DELETE');
}

onBeforeMount(fetch);
</script>

<style scoped>

</style>