<template>
  <div class="pantry-view">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Your Pantry</a>
      </li>
      <li>
        <a class="nav-link" href="/addIngredient">Add Ingredients</a>
      </li>
    </ul>
    <div class="pantry_view">
      <UserPantry />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserPantry from "@/components/UserPantry.vue";
</script>
<style scoped>
.pantry-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
