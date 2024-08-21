<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>
  <MealItem :meals="ingredients" />
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";

const ingredients = computed(() => store.state.mealsByIngredient);

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);

const searchMealsByIngredient = () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
};

onMounted(() => {
  if (route.params.ingredient) {
    searchMealsByIngredient();
  }
});
</script>
