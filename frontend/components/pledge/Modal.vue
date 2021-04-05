<template>
  <div>
    <header class="modal__header">
      <h1 id="modal-1-title" class="modal__title mb-4">
        Back this project
      </h1>

      <button
        class="modal__close"
        aria-label="Close modal"
        data-micromodal-close
      >
        <img
          class="pointer-events-none"
          src="~/assets/images/icon-close-modal.svg"
          alt=""
        >
      </button>
    </header>

    <div id="modal-1-content" class="modal__content mb-8">
      <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    </div>

    <div class="space-y-6">
      <Pledge
        v-for="reward in rewardsSortedByMinimumPledgeASC"
        :key="reward.id"
        :reward="reward"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'PledgeModal',

  props: {
    loaded: {
      type: Boolean,
      required: true
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
    this.$emit('update:loaded', true)
  }
}
</script>
