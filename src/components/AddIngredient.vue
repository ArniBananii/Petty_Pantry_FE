<template>
<h1>Arsenal der Zutaten</h1>
  <h2>Füge deine Zutaten zu deinem Pantry dazu!</h2>
  <div v-for="ing in ingredients" :key="ing.ingredientID">
    <button>{{ing.ingredientName}}</button>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import useFetch from "@/service/useFetch";

const getUrl = 'http://localhost:8080/api/v1/ingredients';
const postUrl = 'http://localhost:8080/api/v1/unqingredient';
const ingredients = ref([]);

const fetch = async () => {
  const data = await useFetch(getUrl, 'GET');
  ingredients.value = data;
}

const insertIngredients = async (userID: String, pantryID: String) => {
}

onMounted(fetch);
</script>

<style scoped>

</style>