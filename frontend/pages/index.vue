<template>
  <div>
    <img
      class="h-[300px] object-cover"
      src="https://source.unsplash.com/random/3000x400"
      loading="lazy"
      alt=""
    >
    <ProjectsList :projects="projects" />
  </div>
</template>

<script>
import { allProjects } from '~/common/graphql/query'

export default {

  async fetch () {
    await this.$axios.post('/graphql',
      allProjects
    )
      .then((res) => {
        if (res.status === 200) {
          this.projects = res.data.data.projects
        }
      })
      .catch(err => console.log(err))
  },

  data () {
    return {
      projects: []
    }
  }
}
</script>
