<template>
  <div
    class="border border-black border-opacity-15 rounded-lg"
    :class="[ reward.quantity === 0 ? 'opacity-50' : null ]"
  >
    <div class="py-8 px-7">
      <div class="flex items-center mb-4">
        <h3 class="mb-2 font-bold sm:mb-0">
          {{ reward.title }}
        </h3>

        <div
          v-if="reward.minimumPledge >= 2"
          class="text-cyan-500 font-bold ml-4 mr-auto"
        >
          {{ `Pledge $${reward.minimumPledge} or more` }}
        </div>

        <div
          v-if="! (reward.quantity === null)"
          class="flex items-center mb-6 sm:mb-0"
        >
          <span class="text-lg font-bold leading-6">
            {{ reward.quantity }}
          </span>
          <span class="ml-2 text-gray-800">
            left
          </span>
        </div>
      </div>

      <div class="text-sm leading-6 text-gray-800 sm:text-base sm:leading-7">
        <p>{{ reward.description }}</p>
      </div>
    </div>
  </div>
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
