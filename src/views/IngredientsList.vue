<template>
  <div class="p-8 pb-0">
    <h1 class="text-5xl font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-[#BBB] focus:border-[#BBB] w-full mb-3"
      placeholder="Search for Meals"
      @change="searchMealsByName"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import { useRouter } from "vue-router";

const ingredients = ref([]);
const keyword = ref("");
const router = useRouter();

const computedIngredients = computed(() => {
  if (keyword.value === "") return ingredients.value;

  return ingredients.value.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=1").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
