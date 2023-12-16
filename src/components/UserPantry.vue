<template>
  <h1>Dein Pantry</h1>
  <div>
      <table>
        <tr>
          <th>Zutat</th>
          <th>Pantry</th>
          <th>Ablaufdatum</th>
        </tr>
        <tr v-for="ing in ingredients" :key="ing.uniqueIngredientID">
          <td>{{ing.ingredientID}}</td>
          <td>{{ing.pantryID}}</td>
          <td>{{ing.expirationDate}}</td>
        </tr>
      </table>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import useFetch from "@/service/useFetch";
import {UNQINGREDIENT_ENDPOINT} from "@/constants";

const ingredients = ref([]);
const userID = '9';

const fetch = async () => {
  const data = await useFetch(UNQINGREDIENT_ENDPOINT.concat(userID), 'GET');
  ingredients.value = data;
};
onBeforeMount(fetch);
</script>

<style scoped>

</style>