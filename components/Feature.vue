<template>
  <div
    class="flex flex-col items-center gap-4 px-4 xl:px-0 lg:flex-row lg:justify-between"
    :class="reverse ? 'lg:flex-row-reverse' : ''"
  >
    <div class="lg:w-1/2 text-center lg:text-left">
      <h2 class="font-bold text-2xl">{{ title }}</h2>
      <p class="text-lg">
        {{ text }}
      </p>
    </div>
    <NuxtPicture
      v-if="imagePath"
      format="avif, webp"
      class="flex"
      :class="reverse ? 'justify-start' : 'justify-end'"
      :src="imagePath"
      :img-attrs="{ alt: imgAlt, class: 'w-full sm:w-2/3 rounded-lg' }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  imagePath: string;
  imgAlt: string;
  reverse?: boolean;
}>();
</script>
