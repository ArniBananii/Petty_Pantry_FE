<template>
  <div class="addIngredient-view">
    <div class="container">
      <ul class="nav nav-underline" style="top: 2px; width: 167%; z-index: 1000">
        <li class="nav-item">
          <a class="nav-link" href="/pantry" style="color: white">Your Pantry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style="color: coral" href="#" aria-current="page">Add Ingredients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color: white">About us</a>
        </li>
        <li class="nav-item mx-lg-auto">
          <button @click="logOut" class="btn" style="background-color: coral; color: white">Log-Out</button>
        </li>
      </ul>
    </div>
    <div class="container addIngredient-view">
      <AddIngredient />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddIngredient from "@/components/AddIngredient.vue";
import router from "@/router";

const logOut = () => {
  localStorage.clear();
  router.push("/login");
}
</script>

<style scoped>
.addIngredient-view {
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
}
</style>
