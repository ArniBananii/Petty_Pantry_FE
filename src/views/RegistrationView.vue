<template>
  <div class="registration-view">
    <h1>Registration</h1>

    <RegistrationForm />
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
