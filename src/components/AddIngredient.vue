<template>
  <div class="mb-5 text-center" style="background-color: #181818; padding: 20px; border-radius: 15px; margin: 0 -20px; width: 100%">
    <h2 style="color: coral">Arsenal of Ingredients</h2>
    <h2 style="color: white">Add your ingredients to your Pantry!</h2>
  </div>
  <div class="text-center mt-3">
    <div class="container">
      <div class="row" v-for="ing in ingredients" :key="ing.ingredientID">
        <div class="col ingredient-container">
          <div class="ingredient-component">
            <!-- TODO: We have Ingredients so why not give props? we can unref! -->
            <IngredientComponent :ingredientID="ing.ingredientID" />
            <button
              @click="insertIngredients(ing.ingredientID, pantryID)"
              :disabled="buttonDisabled"
              class="btn button-overlay"
              :class="buttonDisabled ? 'disabled-button' : 'base-button'"
            >
              Add
            </button>
          </div>
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
const pantryID = ref(0);
const user = JSON.parse(localStorage.getItem("user") ?? "");
const buttonDisabled = ref(false);

const insertIngredients = async (ingredientID: number, pantryID: number) => {
  if (!buttonDisabled.value) {
    buttonDisabled.value = true;
  }
  const postBody = {
    pantryID: pantryID,
    ingredientID: ingredientID,
  };
  //const { execute } deconstructing to trigger the fetch when wanted!
  await useFetch(`${POST_UNQING_ENDPOINT}`).post(postBody);
  setTimeout(() => {
    buttonDisabled.value = false;
  }, 250)
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
.base-button {
  background-color: coral;
  color: white;
}

.disabled-button {
  background-color: #282828;
  color: #cccccc;
  cursor: not-allowed;
  border: none;
}

.ingredient-container {
  position: relative;
  overflow: hidden;
}

.ingredient-component {
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

.ingredient-component:hover .button-overlay {
  opacity: 1;
}

.ingredient-component:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid coral;
  background: rgba(0, 0, 0, 0.5);
  animation: borderGrow 0.5s forwards;
}

@keyframes borderGrow {
  from {
    border-width: 0;
  }
  to {
    border-width: 7px;
  }
}

.container {
  max-width: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
</style>
