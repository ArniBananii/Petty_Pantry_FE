<template>
  <img :src="ingredientUrl" alt="pipi" sizes="" />
  <span>{{ ingredientName }}</span> |
  <span>{{ ingredientExpirationDate || "" }}</span>
</template>

<script setup lang="ts">
import { INGREDIENT_ENDPOINT } from "@/constants";
import { onMounted, ref } from "vue";
import { useFetch } from "@vueuse/core";

const ingredientName = ref("Loading...");
const ingredientExpirationDate = ref("Loading...");
const ingredientUrl = ref("Loading...");

const prop = defineProps({
  ingredientID: Number,
});

onMounted(async () => {
  try {
    const response = await useFetch(
      `${INGREDIENT_ENDPOINT}${prop.ingredientID}`
    )
      .get()
      .json();

    ingredientName.value = response.data.value.ingredientName;

    ingredientExpirationDate.value = response.data.value.validNoOfDays;

    ingredientUrl.value = response.data.value.imageURL;

    console.log("ingredienData", response.data.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
