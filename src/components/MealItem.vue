<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl hover:scale-105 transition-all"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <div>
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl h-48 w-full object-cover"
          />
          <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <!-- <p class="mb-2">{{ meal.strInstructions }}</p> -->
            <YoutubeButton :href="meal.strYoutube" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div
    v-if="!meals.length"
    class="flex justify-center text-2xl text-gray-500 font-semibold p-8"
  >
    There are no such meals
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meals } = defineProps({
  meals: {
    type: Array,
    required: true,
  },
});
</script>
