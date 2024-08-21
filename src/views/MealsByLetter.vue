<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-[#1E1F24]">Meals by Letter</h1>
  </div>
  <div class="flex justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-[#2B3E21] hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>
  <MealItem :meals="meals" />
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import MealItem from "../components/MealItem.vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const letter = ref("");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(() => store.state.mealsByLetter);
const searchMealsByLetter = () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
};

watch(route, () => {
  searchMealsByLetter();
});
onMounted(() => {
  letter.value = route.params.letter;
  if (letter.value) {
    searchMealsByLetter();
  } else {
    store.commit("setMealsByLetter", []);
  }
});
</script>
