<template>
  <h1>Your Pantry</h1>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="error">Error: {{error}}</div>
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
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const ingredients = ref([]);
const url = 'http://localhost:8080/api/v1/unqingredients';
const loading = ref(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await fetch(url);
    ingredients.value = await response.json();
  } catch (e: any) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData)
</script>

<style scoped>

</style>