<template>
  <div class="flex flex-col h-full bg-gray-200 overflow-hidden">
    <LazyHeader />
    <main class="relative max-w-[730px] mx-6 md:mx-auto mb-20 ">
      <Nuxt />
    </main>
    <LazyModal />
    <!-- <Footer class="mt-auto" /> -->
  </div>
</template>
