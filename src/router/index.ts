import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import PantryView from "@/views/PantryView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/pantry",
      name: "pantry",
      component: PantryView,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name == "pantry" && !localStorage.getItem("user")) {
    next({ name: "login" });
  } else {
    next();
  }
});
export default router;
