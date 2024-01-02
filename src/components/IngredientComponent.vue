<template>
  <span>{{ ingredientName }}</span> |
  <span>{{ ingredientExpirationDate || "" }}</span>
</template>

<script setup lang="ts">
import { INGREDIENT_ENDPOINT } from "@/constants";
import useFetch from "@/service/useFetch";
import { onMounted, ref } from "vue";

const prop = defineProps({
  ingredientID: Number,
  expirationDate: String,
});
const ingredientName = ref("");

const ingredientExpirationDate = prop.expirationDate
  ? new Date(prop.expirationDate).toLocaleDateString()
  : undefined;

const fetch = async () => {
  console.log("mount!");

  const data = await useFetch(
    INGREDIENT_ENDPOINT.concat(prop.ingredientID!.toString()),
    "GET"
  );

  ingredientName.value = data.ingredientName;
};
onMounted(fetch);
</script>
