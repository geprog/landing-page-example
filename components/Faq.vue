<template>
  <details class="collapse collapse-arrow">
    <summary class="collapse-title text-xl font-medium">{{ title }}</summary>
    <div class="collapse-content">
      <p>{{ text }}</p>
    </div>
  </details>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>
