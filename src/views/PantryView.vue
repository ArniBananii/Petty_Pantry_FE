<template>
  <div class="top-div">
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
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
