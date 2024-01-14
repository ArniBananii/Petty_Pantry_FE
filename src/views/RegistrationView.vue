<template>
  <div class="text-center" style="height: 100vh; display: flex; justify-content: center; align-items: center">
    <div class="registration-view" style="height: 35.3%;width: 100%; border-color: coral">
      <h1 class="display-4 text-center fw-bold" style="color: white">Registration</h1>

      <RegistrationForm />
    </div>
  </div>

</template>

<script lang="ts">
import RegistrationForm from "@/components/RegistrationForm.vue";
export default {
  name: "RegistrationView",

  components: {
    RegistrationForm,
  },
};
</script>

<style scoped>
.registration-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
