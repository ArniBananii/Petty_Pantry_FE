<template>
  <div>
    <input type="text" v-model="userName" placeholder="Username" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <button @click="login">Login</button>
    <div>{{ userName }}</div>
    <div>
      {{ user.isLoggedIn ? "Logged in" : "Not logged in" }}
    </div>
  </div>
</template>

<script lang="ts">
import { USERS_ENDPOINT } from "@/constants";
import useFetch from "@/service/useFetch";
import { userStore } from "@/store";
import { ref } from "vue";
export default {
  setup() {
    const userName = ref("");
    const password = ref("");
    const user = userStore();
    const login = () => {
      user.login(userName.value, password.value);
      // Perform login logic here
      const data = useFetch(USERS_ENDPOINT, "POST", {
        userName: userName.value,
        password: password.value,
      });
      // save user state in localsotrage or cookie!
      console.log(
        data.then((res) => console.log("response from backend:", res))
      );
      console.log("user", user.userState);
      console.log("data");
    };

    return {
      userName,
      password,
      user,
      login,
    };
  },
};
</script>
