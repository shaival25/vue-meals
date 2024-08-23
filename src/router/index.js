import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByName from "../views/MealsByName.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import LoginLayout from "../components/LoginLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import IngredientsList from "../views/IngredientsList.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredientsList",
        component: IngredientsList,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/auth",
    component: LoginLayout,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
