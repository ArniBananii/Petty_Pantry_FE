<template>
  <div class="text-center" style="height: 100vh; display: flex; justify-content: center; align-items: center">
    <div class="login-view" style="width: 100%; border-color: coral">
      <h1 class="display-4 text-center fw-bold" style="color: white">Login</h1>
      <LoginForm />
    </div>
  </div>

</template>

<script lang="ts">
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "LoginView",

  components: {
    LoginForm,
  },
};
</script>
import "bootstrap/dist/css/bootstrap.css";

<style scoped>
.login-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
