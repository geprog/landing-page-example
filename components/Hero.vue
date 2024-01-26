<template>
  <div class="hero h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="max-w-sm">
        <NuxtPicture
          src="images/simon-lee-_B7LjqNXu5Q-unsplash.jpg"
          :img-attrs="{
            alt: 'hero',
            class: 'w-full rounded-lg shadow-2xl',
          }"
        />
      </div>
      <div>
        <h1 class="text-5xl font-bold">Get your own Solar System</h1>
        <p class="py-6">
          Own a piece of the cosmos! Experience the beauty of the solar system
          like never before. Your cosmic journey starts here. Seize the
          opportunity today!
        </p>
        <button class="btn btn-secondary">Call to action</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
