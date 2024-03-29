import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import LoginView from "@/views/LoginView.vue";
import PantryView from "@/views/PantryView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import AddIngredientView from "@/views/AddIngredientView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: "/addIngredient",
      name: "addIngredient",
      component: AddIngredientView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
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
