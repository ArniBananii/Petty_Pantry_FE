<template>
  <div>
    <div class="input-group mb-3">
      <span class="input-group-text" style="width: 17.5%" id="basic-addon1">@</span>
      <input class="form-control" type="text" v-model="userName" placeholder="Username" required />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" style="width: 17.5%" id="basic-addon2">*</span>
      <input class="form-control" type="password" v-model="password" placeholder="Password" required />
    </div>
    <button class="btn btn-warning mb-3" @click="login">Login</button>
    <div class="text-center">
      <RouterLink to="/registration">Dont have an account? Click here!</RouterLink>
    </div>
    <div v-bind:class="{ 'text-success' : user.isLoggedIn, 'text-danger' : !user.isLoggedIn}" class="text-center">
      {{ user.isLoggedIn ? "Logged in" : "Not logged in" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { SINGLE_USER_ENDPOINT } from "@/constants";
import useFetch from "@/service/useFetch";
import { useRouter } from "vue-router";
import {  userStore } from "@/store";
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";

const userName = ref("");
const password = ref("");
const user = userStore();
const router = useRouter();

const login = async () => {
  // Perform login logic here
  const data = useFetch(SINGLE_USER_ENDPOINT, "POST", {
    userName: userName.value,
    password: password.value,
  });

 

  data.then((res) => {
    if (res) {
      console.log("res", res);
      localStorage.setItem("user", JSON.stringify(res));
      router.push({ name: "pantry" });
    } else {
      console.log("res", res);
      console.log("User not found");
    }
  });
};
</script>
