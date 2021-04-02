<template>
  <div class="project-block mt-6 pt-10 sm:pt-12">
    <h2 class="mb-6 text-lg font-bold leading-6 sm:text-xl sm:leading-6 sm:mb-8">
      About this project
    </h2>

    <div class="mb-8 text-sm text-gray-800 leading-6 sm:text-base sm:leading-8 sm:mb-10">
      {{ project.description }}
    </div>

    <div class="space-y-6">
      <Reward
        v-for="reward in rewardsWithQuantity"
        :key="reward.id"
        :reward="reward"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'ProjectBody',

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  computed: {
    /**
     * [FR] Retourne la liste des récompenses ayant le champ quantité renseigné
     * [EN] Returns the list of rewards with the quantity field filled in
     */
    rewardsWithQuantity () {
      return this.project.rewards.filter(reward => reward.quantity !== null)
    }
  }
}
</script>
