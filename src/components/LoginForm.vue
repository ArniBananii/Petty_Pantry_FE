<template>
  <div>
    <input type="text" v-model="userName" placeholder="Username" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button class="btn btn-warning mt-2" @click="login">Login</button>
    <div>{{ userName }}</div>
    <RouterLink to="/registration">U have no ACCOUNT?! click here!</RouterLink>
    <div>
      {{ user.isLoggedIn ? "Logged in" : "Not logged in" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { SINGLE_USER_ENDPOINT } from "@/constants";
import useFetch from "@/service/useFetch";
import { useRouter } from "vue-router";
import { pantryStore, userStore } from "@/store";
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

  console.log("data", data);

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
