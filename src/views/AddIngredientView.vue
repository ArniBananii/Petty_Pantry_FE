<template>
  <div class="addIngredient-view">
    <div class="container">
      <ul class="nav nav-underline" style="top: 2px; z-index: 1000">
        <li class="nav-item">
          <a class="nav-link" href="/#/pantry" style="color: white"
            >Your Pantry</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            style="color: coral"
            href="#"
            aria-current="page"
            >Add Ingredients</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color: white" href="/#/about">About us</a>
        </li>
        <li class="nav-item ms-auto">
          <button @click="deleteUser" class="btn btn-danger">
            Delete Account
          </button>
        </li>
        <li class="nav-item">
          <button
            @click="logOut"
            class="btn"
            style="background-color: coral; color: white"
          >
            Log-Out
          </button>
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
import { useFetch } from "@vueuse/core";
import { SINGLE_USER_ENDPOINT } from "@/constants";

const user = JSON.parse(localStorage.getItem("user") ?? "");

const logOut = () => {
  localStorage.clear();
  router.push("/login");
};

const deleteUser = async () => {
  await useFetch(`${SINGLE_USER_ENDPOINT}/${user.userID}`).delete();
  localStorage.clear();
  router.push("/login");
};
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
