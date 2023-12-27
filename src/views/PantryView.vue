<template>
  <div class="pantry_view">
    <UserPantry />
  </div>
</template>

<script lang="ts">
import UserPantry from "@/components/UserPantry.vue";
export default {
  name: "PantryView",
  components: {
    UserPantry,
  },
};
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
