<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Search Meals by Name</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-[#BBB] focus:border-[#BBB] w-full"
      placeholder="Search for Meals"
      @change="searchMealsByName"
    />
  </div>
  <MealItem :meals="meals" />
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const keyword = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
const searchMealsByName = () => {
  store.dispatch("searchMeals", keyword.value);
};

onMounted(() => {
  keyword.value = route.params.name;
  searchMealsByName();
});
</script>
