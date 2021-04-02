<template>
  <ProjectsList :projects="projects" />
</template>

<script>
import { getProjects } from '~/common/graphql/query.js'
import headerThumbnailState from '~/common/state/header.js'

export default {

  async fetch () {
    await this.$axios.post('/graphql',
      getProjects
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
  },

  beforeMount () {
    headerThumbnailState.src = 'https://source.unsplash.com/random/2600x400'
  }
}
</script>
