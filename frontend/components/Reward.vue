<template>
  <article
    class="p-6 border border-black border-opacity-15 rounded-lg sm:p-8"
    :class="[ reward.stock === 0 ? 'opacity-50' : null ]"
  >
    <!-- Reward Header -->
    <header class="sm:flex sm:justify-between mb-6">
      <h1 class="mb-2 font-bold leading-6 sm:mb-0 sm:text-lg ">
        {{ reward.title }}
      </h1>
      <div class="text-cyan-500 font-medium">
        {{ `Pledge $${reward.min} or more` }}
      </div>
    </header>

    <!-- Reward Description -->
    <div class="mb-6 leading-6 text-gray-800 sm:leading-8">
      <p>{{ reward.description }}</p>
    </div>

    <!-- Reward Footer -->
    <footer class="sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center mb-6 sm:mb-0">
        <span class="text-[2rem] leading-10 font-bold">
          {{ reward.stock }}
        </span>
        <span class="ml-2 text-gray-800">
          left
        </span>
      </div>

      <Button
        type="smaller"
        :disabled="!reward.stock"
      >
        {{ reward.stock ? 'Select Reward' : 'Out of stock' }}
      </Button>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    reward: {
      type: Object,
      required: true
    }
  }
}
</script>
