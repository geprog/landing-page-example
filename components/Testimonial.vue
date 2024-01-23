<template>
  <div class="flex w-full md:w-1/3 rounded-md shadow-md p-4 bg-accent">
    <div class="flex gap-2 md:flex-col md:items-center">
      <NuxtPicture
        :src="imagePath"
        class="w-full sm:w-1/2 flex justify-center items-center"
        :img-attrs="{
          alt: imgAlt,
          class: 'rounded-full',
        }"
      />
      <div>
        <h3 class="card-title">{{ author }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  author: string;
  text: string;
  imagePath: string;
  imgAlt: string;
}>();
</script>
