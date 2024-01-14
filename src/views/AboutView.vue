<template>
  <div class="about-view" style="height: 100vh; border: none">
    <div class="container">
      <ul class="nav nav-underline" style="top: 2px; z-index: 1000">
        <li class="nav-item">
          <a class="nav-link" href="/#/pantry" style="color: white"
            >Your Pantry</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" style="color: white" href="/#/addingredient"
            >Add Ingredients</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            href="#"
            style="color: coral"
            aria-current="page"
            >About us</a
          >
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
    <div class="container about-view text-center">
      <h2 style="color: coral">About Us</h2>
      <p style="color: white">
        Arno Heitmann and Sidar Dalli created this site in order to help People
        manage ingredients inside their pantry
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { SINGLE_USER_ENDPOINT } from "@/constants";
import router from "@/router";

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
.about-view {
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
}
</style>
