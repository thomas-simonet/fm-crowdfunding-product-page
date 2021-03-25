<template>
  <div>
    <div class="mt-[300px]">
      Projects list
    </div>

    <RouterLink to="project/mastercraft-bamboo-monitor-riser">
      Mastercraft Bamboo Monitor Riser
    </RouterLink>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rewards: [
        {
          id: 1,
          title: 'Bamboo Stand',
          description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
          min: 25,
          stock: 100
        },
        {
          id: 1,
          title: 'Bamboo Stand',
          description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
          min: 25,
          stock: 0
        }
      ],
      project: {
        backed: '89,914',
        maximumBack: '100,000',
        totalBackers: '5,007',
        daysLeft: '56'
      }
    }
  }
}
</script>
