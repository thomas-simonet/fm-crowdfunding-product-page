<template>
  <div class="project-block pt-10 sm:pt-12">
    <h2 class="mb-6 text-lg font-bold leading-6 sm:text-xl sm:leading-6 sm:mb-8">
      About this project
    </h2>
    <div class="mb-8 text-sm text-gray-800 leading-6 sm:text-base sm:leading-8 sm:mb-10">
      {{ project.description }}
    </div>
    <div class="space-y-6">
      <Reward
        v-for="reward in rewards"
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

  data () {
    return {
      rewards: [
        {
          id: 1,
          title: 'Bamboo Stand',
          description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
          min: 25,
          stock: 101
        },
        {
          id: 2,
          title: 'Black Edition Stand',
          description: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
          min: 75,
          stock: 65
        },
        {
          id: 2,
          title: 'Mahogany Special Edition',
          description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
          min: 200,
          stock: 0
        }
      ]
    }
  }
}
</script>
