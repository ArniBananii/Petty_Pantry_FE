<template>
  <div class="addIngredient-view">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="/pantry">Your Pantry</a>
      </li>
      <li>
        <a class="nav-link active deactivate">Add Ingredients</a>
      </li>
    </ul>
    <div class="pantry_view">
      <AddIngredient />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddIngredient from "@/components/AddIngredient.vue";
</script>

<style scoped>
.addIngredient-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
