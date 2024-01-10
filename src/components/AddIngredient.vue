<template>
  <div class="text-center mt-3">
    <h1>Arsenal der Zutaten</h1>
    <h2>Füge deine Zutaten zu deinem Pantry dazu!</h2>
    <div class="container">
      <div class="row" v-for="ing in ingredients" :key="ing.ingredientID">
        <div class="col ingredient-container">
          <div class="ingredient-image">
            <IngredientComponent
                :ingredientID="ing.ingredientID"
            />
          </div>
            <button @click="insertIngredients(ing.ingredientID, pantryID)" class="btn btn-success button-overlay">Add</button>
          </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import { onMounted, ref, type Ref } from "vue";
import IngredientComponent from "./IngredientComponent.vue";
import { useFetch } from "@vueuse/core";
import {
  INGREDIENTS_ENDPOINT,
  POST_UNQING_ENDPOINT,
  USER_PANTRY_ENDPOINT,
} from "@/constants";
import type { Ingredient } from "@/@types";

const ingredients = ref([] as Ingredient[]) as Ref<Ingredient[]>;
const pantryID = ref(0) as Ref<number>;
const user = JSON.parse(localStorage.getItem("user") ?? "");

const insertIngredients = async (ingredientID: number, pantryID: number) => {
  const postBody = {
    pantryID: pantryID,
    ingredientID: ingredientID,
  };

  //const { execute } deconstructing to trigger the fetch when wanted!
  await useFetch(`${POST_UNQING_ENDPOINT}`).post(postBody);
};

onMounted(async () => {
  try {
    const ingredientResponse = await useFetch(`${INGREDIENTS_ENDPOINT}`)
      .get()
      .json();
    const uniquePantryIdResponse = await useFetch(
      `${USER_PANTRY_ENDPOINT}${user.userID}`
    )
      .get()
      .json();

    ingredients.value = ingredientResponse.data.value;
    pantryID.value = uniquePantryIdResponse.data.value.pantryID;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped>
.ingredient-container {
  position: relative;
  overflow: hidden;
}

.ingredient-image {
  position: relative;
  overflow: hidden;
}

.button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.ingredient-container:hover .button-overlay {
  opacity: 1;
}

.ingredient-container:hover .ingredient-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
