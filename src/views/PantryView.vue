<template>
  <div class="pantry-view">
    <div class="container">
      <ul class="nav nav-underline" style="top: 2px; z-index: 1000">
        <li class="nav-item">
          <a
            class="nav-link active"
            style="color: coral"
            aria-current="page"
            href="#"
            >Your Pantry</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color: white" href="/#/addIngredient"
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
    <div class="container pantry-view">
      <UserPantry />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserPantry from "@/components/UserPantry.vue";
import router from "@/router";
import { useFetch } from "@vueuse/core";
import { SINGLE_USER_ENDPOINT } from "@/constants";

const user = JSON.parse(localStorage.getItem("user") ?? "");

const deleteUser = async () => {
  await useFetch(`${SINGLE_USER_ENDPOINT}/${user.userID}`).delete();
  localStorage.clear();
  router.push("/login");
};

const logOut = () => {
  localStorage.clear();
  router.push("/login");
};
</script>
<style scoped>
.pantry-view {
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
}
</style>
