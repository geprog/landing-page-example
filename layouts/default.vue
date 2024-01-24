<template>
  <div data-theme="companytheme" class="bg-neutral text-white">
    <Header />
    <main class="p-8 flex flex-col gap-4 max-w-screen-lg mx-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>
