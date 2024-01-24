<template>
  <div
    class="flex flex-col justify-between items-center bg-primary rounded-md w-full md:w-1/3 p-4 gap-4"
  >
    <h3 class="text-xl">{{ title }}</h3>
    <p class="font-bold text-2xl">{{ cost }}€</p>
    <p class="text-center">{{ text }}</p>
    <button class="btn btn-secondary"><a href="">Call to action</a></button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  cost: string;
  text: string;
}>();
</script>
