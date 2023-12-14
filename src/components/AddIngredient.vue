<template>
<h1>Arsenal der Zutaten</h1>
  <h2>Füge deine Zutaten zu deinem Pantry dazu!</h2>
  <div v-for="ing in ingredients" :key="ing.ingredientID">
    <button>{{ing.ingredientName}}</button>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const getUrl = 'http://localhost:8080/api/v1/ingredients';
const postUrl = 'http://localhost:8080/api/v1/unqingredient';
const ingredients = ref([]);
const error = ref(null);
const fetchIngredients = async () => {
  try{
    const response = await fetch(getUrl);
    ingredients.value = await response.json();
  } catch (e: any) {
    error.value = e;
  }
};

const insertIngredients = async (userID: String, pantryID: String) => {
}

onMounted(fetchIngredients);
</script>

<style scoped>

</style>