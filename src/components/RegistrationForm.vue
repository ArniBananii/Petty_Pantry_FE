<template>
  <div>
    <form>
      <div class="input-group mb-3">
        <span class="input-group-text" style="width: 17.5%" id="basic-addon1">@</span>
        <input class="form-control" type="text" v-model="userName" placeholder="Username" required />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" style="width: 17.5%" id="basic-addon1">*</span>
        <input class="form-control" type="password" v-model="password" placeholder="Password" required />
      </div>
      <button class="btn mb-3" style="background-color: coral; color: white" @click="register">Go!</button>
    </form>
    <div class="text-center">
      <RouterLink to="/login">Back to Login</RouterLink>
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

  await router.push("/login");
};
</script>
