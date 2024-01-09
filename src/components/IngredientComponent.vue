<template>
  <img :src="ingredientUrl" alt="pipi" loading="lazy" />
  <span>{{ ingredientName }}</span> |
  <span>{{ ingredientExpirationDate }}</span>
</template>

<script setup lang="ts">
import { INGREDIENT_ENDPOINT } from "@/constants";
import { onMounted, ref } from "vue";
import { useFetch } from "@vueuse/core";

const ingredientName = ref("Loading...");
const ingredientExpirationDate = ref("Loading...");
const ingredientUrl = ref("Loading...");

const prop = defineProps<{
  ingredientID: number;
  uniqueIngredientExperationDate?: Date;
}>();

onMounted(async () => {
  try {
    const response = await useFetch(
      `${INGREDIENT_ENDPOINT}${prop.ingredientID}`
    )
      .get()
      .json();

    if (prop.uniqueIngredientExperationDate) {
      const date = new Date(prop.uniqueIngredientExperationDate);
      ingredientExpirationDate.value = date.toLocaleDateString();
    } else {
      ingredientExpirationDate.value = response.data.value.validNoOfDays;
    }

    ingredientName.value = response.data.value.ingredientName;
    ingredientUrl.value = response.data.value.imageURL;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
