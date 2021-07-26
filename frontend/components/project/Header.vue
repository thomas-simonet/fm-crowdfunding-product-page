<template>
  <header>
    <div class="relative pt-[52px] project-block">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="~/assets/images/logo-mastercraft.svg" alt="">
      </div>

      <h1 class="mb-4 text-xl text-center font-bold leading-6 sm:text-3xl">
        {{ getProject.title }}
      </h1>

      <p class="mb-6 text-center text-gray-800 text-sm leading-6 md:text-base md:leading-5">
        {{ getProject.shortDescription }}
      </p>

      <div class="flex justify-between">
        <Button
          @click.native="$nuxt.$emit('open-modal', { component: 'RewardModal' })"
        >
          Back this project
        </Button>

        <ProjectBookmark />
      </div>
    </div>

    <div class="project-block mt-6 pt-8 sm:py-12">
      <div class="mb-8 space-y-12 sm:mb-9 sm:space-y-0 sm:grid sm:grid-cols-3 md:grid-cols-[179px 1fr 227px]">
        <ProjectMeta
          :prefix="'$'"
          :value="89914"
        >
          {{ `of $${getProject.goal} backed` }}
        </ProjectMeta>

        <ProjectMeta
          :value="5007"
          class="separator"
        >
          total backers
        </ProjectMeta>

        <ProjectMeta
          :value="daysLeft"
          class="separator"
        >
          days left
        </ProjectMeta>
      </div>

      <ProjectProgress
        :progress="89914"
        :goal="getProject.goal"
      />
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'ProjectHeader',

  computed: {
    ...mapGetters('project', ['getProject']),

    /**
     * [FR] Retourne le nombre de jours restant pour participer au format JJ
     * [EN] Returns the number of days remaining to participate in DD format
     */
    daysLeft () {
      return Math.max(0, Math.ceil((new Date(this.getProject.dateEnd) - new Date()) / (1000 * 60 * 60 * 24)))
    }
  }
}
</script>
