<template>
  <Modal :id="id">
    <header class="modal__header">
      <h2 id="modal-1-title" class="modal__title mb-4">
        Back this project
      </h2>

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
  </Modal>
</template>

<script>
export default {

  name: 'PledgeModal',

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      id: 'modal-pledges'
    }
  },

  computed: {
    /**
     * [FR] Retourne la liste des rewards triées par ordre croissant de 'minimumPledge'
     * [EN] Returns the list of rewards sorted in ascending order of 'minimumPledge'
     */
    rewardsSortedByMinimumPledgeASC () {
      return this.project.rewards
        .slice(0)
        .sort((a, b) => a.minimumPledge > b.minimumPledge)
    }
  }
}
</script>
