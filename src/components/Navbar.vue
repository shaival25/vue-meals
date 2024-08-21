<template>
  <header class="h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center transition-all px-2 font-bold text-[#2B3E21]"
      >Home</router-link
    >
    <div class="flex items-center gap-4">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center rounded-full transition-all px-3 hover:bg-[#2B3E21] hover:text-white"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center rounded-full transition-all px-3 hover:bg-[#2B3E21] hover:text-white"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredientsList' }"
        class="inline-flex items-center rounded-full transition-all px-3 hover:bg-[#2B3E21] hover:text-white"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
