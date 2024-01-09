<template>
  <div>
    <input type="text" v-model="userName" placeholder="Username" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button @click="register">Go!</button>
    <div>{{ userName }}</div>
    <RouterLink to="/login">U have an ACCOUNT?! click here!</RouterLink>
    <div>
      {{ user.isLoggedIn ? "Logged in" : "Not logged in" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { USER_REGISTER_ENDPOINT } from "@/constants";
import useFetch from "@/service/useFetch";
import { useRouter } from "vue-router";
import { userStore } from "@/store";
import { ref } from "vue";

const userName = ref("");
const password = ref("");
const user = userStore();
const router = useRouter();

const register = async () => {
  // Perform login logic here
  console.log("USER_REGISTER_ENDPOINT", USER_REGISTER_ENDPOINT);
  const data = useFetch(USER_REGISTER_ENDPOINT, "POST", {
    userName: userName.value,
    password: password.value,
  });

  data.then((res) => {
    if (res !== 404 && res.userName !== undefined) {
      user.login(res.userName, res.password, res.userID, true);
      localStorage.setItem("user", JSON.stringify(user.userState));
      router.push({ name: "pantry" });
    } else {
      console.log("User not found");
    }
  });
};
</script>
