<template>
  <article
    class="p-6 border border-black border-opacity-15 rounded-lg sm:p-8"
    :class="[ reward.quantity === 0 ? 'opacity-50' : null ]"
  >
    <header class="mb-6 text-sm leading-4 sm:flex sm:justify-between ">
      <h3 class="mb-2 font-bold sm:mb-0 sm:text-lg ">
        {{ reward.title }}
      </h3>
      <div class="text-cyan-500 font-medium">
        {{ `Pledge $${reward.minimumPledge} or more` }}
      </div>
    </header>

    <div class="mb-6 text-sm leading-6 text-gray-800 sm:leading-8">
      <p>{{ reward.description }}</p>
    </div>

    <footer class="sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center mb-6 sm:mb-0">
        <span class="text-[2rem] leading-10 font-bold">
          {{ reward.quantity }}
        </span>
        <span class="ml-2 text-gray-800">
          left
        </span>
      </div>

      <Button
        class="btn-small"
        :disabled="!reward.quantity"
        @click.native="$nuxt.$emit('open-modal', 'PledgeModal')"
      >
        {{ reward.quantity ? 'Select Reward' : 'Out of stock' }}
      </Button>
    </footer>
  </article>
</template>

<script>
export default {

  name: 'ProjectReward',

  props: {
    reward: {
      type: Object,
      required: true
    }
  }
}
</script>
