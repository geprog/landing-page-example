<template>
  <div data-theme="companytheme" class="bg-neutral">
    <Header />
    <main class="p-4 flex flex-col gap-4 max-w-screen-lg mx-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>
