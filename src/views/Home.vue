<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <div class="pb-4">
    <MealItem :meals="meals" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import MealItem from "../components/MealItem.vue";
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
