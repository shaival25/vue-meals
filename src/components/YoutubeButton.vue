<template>
  <a :href="href" target="_blank">
    <img src="../assets/images/youtube.png" class="h-12" />
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
