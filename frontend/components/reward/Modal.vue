<template>
  <div>
    <div class="modal__header">
      <div class="modal__title mb-4 font-body font-bold text-2xl">
        Back this project
      </div>

      <button
        class="modal__close"
        data-micromodal-close
      >
        <div />
        <div />
        <span class="sr-only">Close Modal</span>
      </button>
    </div>

    <div class="modal__content mb-8">
      <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    </div>

    <div class="space-y-6">
      <Reward
        v-for="(reward, index) in rewardsSortedByMinimumPledgeASC"
        :key="reward.id"
        v-model="picked"
        :picked="picked"
        :reward="reward"
        @hook:mounted="isCompletelyMounted(index)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'RewardModal',

  props: {
    loaded: {
      type: Boolean,
      required: true
    },
    params: {
      type: Object,
      required: false,
      default: () => { return {} }
    }
  },

  data () {
    return {
      picked: '0'
    }
  },

  computed: {
    ...mapGetters('project', ['getProject']),

    /**
     * [FR] Retourne la liste des rewards triées du plus petit 'minimumPledge' au plus grand
     * [EN] Returns the list of rewards sorted in ascending order of 'minimumPledge'
     */
    rewardsSortedByMinimumPledgeASC () {
      return this.getProject.rewards
        .slice(0)
        .sort((a, b) => a.minimumPledge > b.minimumPledge)
    }
  },

  mounted () {
    /**
     * Reward is available in this.params if the user clicked on "Select Reward"
     * If not available, select the reward with the minimum Pledge.
     */
    if (this.params.reward) {
      this.picked = this.params.reward.id
    } else {
      this.picked = this.rewardsSortedByMinimumPledgeASC[0].id
    }
  },

  methods: {
    /**
     * Check if all rewards are mounted before opening the modal
     * If the modal is opened before, focus-trap can't find the input inside.
     * $nextTick doesn't help there.
     * => Need a more robust solution for complex modal (With multiple components / loop)
     */
    isCompletelyMounted (index) {
      if (++index === this.rewardsSortedByMinimumPledgeASC.length) {
        this.$emit('update:loaded', true)
      }
    }
  }
}
</script>
