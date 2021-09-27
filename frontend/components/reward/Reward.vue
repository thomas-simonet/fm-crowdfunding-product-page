<template>
  <div
    class="border border-black border-opacity-15 rounded-lg text-gray-800"
    :class="[ reward.quantity === 0 ? 'opacity-50 is-disabled' : null ]"
  >
    <div class="py-8 px-7">
      <div class="flex items-start">
        <div class="mb-6 sm:flex sm:mb-0">
          <div class="custom-radio-btn mb-4 sm:mb-0">
            <input
              :id="`reward-radio-${reward.id}`"
              type="radio"
              name="reward-radio"
              :value="reward.id"
              :disabled="reward.quantity === 0 ? -1 : null"
              :checked="reward.id === picked"
              @input="$emit('input', $event.target.value)"
            >
            <label
              :for="`reward-radio-${reward.id}`"
              class="inline-block ml-6 font-bold"
            >
              {{ reward.title }}
            </label>
          </div>

          <div
            v-if="reward.minimumPledge >= 2"
            class="text-cyan-500 font-bold ml-[50px] mr-auto"
          >
            {{ `Pledge $${reward.minimumPledge} or more` }}
          </div>
        </div>

        <div
          v-if="! (reward.quantity === null)"
          class="hidden sm:flex items-center ml-auto"
        >
          <span class="text-black text-lg font-bold leading-6">
            {{ reward.quantity }}
          </span>
          <span class="ml-2">
            left
          </span>
        </div>
      </div>

      <div class="mt-[10px] sm:ml-12 text-sm leading-6 sm:text-base sm:leading-7">
        <p>{{ reward.description }}</p>
      </div>

      <div
        v-if="! (reward.quantity === null)"
        class="flex items-center mt-6 sm:hidden"
      >
        <span class="text-black text-lg font-bold leading-6">
          {{ reward.quantity }}
        </span>
        <span class="ml-2">
          left
        </span>
      </div>
    </div>
    <div
      v-if="reward.id === picked"
      class="flex flex-wrap justify-center items-center border-t border-black border-opacity-15 py-6 px-7"
    >
      <div class="w-full mb-4 text-center sm:w-auto sm:mb-0">
        Enter your pledge
      </div>
      <PledgeSelector
        v-model="pledge"
        class="sm:ml-auto"
        :min="reward.minimumPledge"
      />
      <Button
        class="btn-small ml-4 px-6"
        :disabled="(pledge && pledge < reward.minimumPledge) ? true : false"
        @click.native="showPledgeSuccess"
      >
        Continue
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // For some reason, nuxt component can't load this component without declaring it explicitly
    PledgeSelector: () => import('~/components/reward/PledgeSelector.vue')
  },

  props: {
    reward: {
      type: Object,
      required: true
    },
    picked: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      pledge: ''
    }
  },

  methods: {
    showPledgeSuccess () {
      if (this.pledge >= this.reward.minimumPledge) {
        this.$nuxt.$emit('open-modal', { component: 'RewardSuccess' })
      }
    }
  }
}
</script>
