<template>
  <div class="login-view">
    <h1 class="display-4 text-center fw-bold" style="color: white">Login</h1>
    <LoginForm />
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
