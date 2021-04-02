<template>
  <progress
    :value="percentage"
    max="100"
  >
    Progress: {{ percentage }}%
  </progress>
</template>

<script>
export default {

  name: 'ProjectProgress',

  props: {
    progress: {
      type: Number,
      required: true
    },
    goal: {
      type: Number,
      required: true
    }
  },

  computed: {
    percentage () {
      return (this.goal / this.progress)
    }
  }
}
</script>

<style lang="scss" scoped>
progress {
  display: block;
  appearance: none;
  border: none;

  width: 100%;
  height: 12px;

  background-color: theme('colors.gray.200');
  border-radius: 2rem;
}

progress[value]::-webkit-progress-bar {
  background-color: theme('colors.cyan.500');
  border-radius: 2rem;
}

progress[value]::-moz-progress-bar {
  background-color: theme('colors.cyan.500');
  border-radius: 2rem;
}
</style>
