<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="text-4xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
      <div>
        <strong class="font-bold">Category:</strong>
        {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area :</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mt-6">
      <div>
        <h2 class="text-2xl font-bold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(ingredient, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-3">Measures</h2>
        <ul>
          <template v-for="(measure, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex justify-center mb-2">
      <YoutubeButton :href="meal.strYoutube" />
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-2 py-3 rounded text-green-800 hover:text-black transition-colors"
        >View Source</a
      >
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
