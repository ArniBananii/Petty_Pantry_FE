<template>
  <div class="pantry_view">
    <UserPantry />
    <AddIngredient />
  </div>
</template>

<script lang="ts" setup>
import AddIngredient from "@/components/AddIngredient.vue";
import UserPantry from "@/components/UserPantry.vue";
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
