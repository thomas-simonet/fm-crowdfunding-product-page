<template>
  <article
    v-if="!$fetchState.pending"
    class="single-project"
  >
    <ProjectHeader :project="project" />
    <ProjectBody :project="project" />
  </article>
</template>

<script>
import { getProjectBySlug } from '~/common/graphql/query'

export default {

  async fetch () {
    try {
      this.project = await this.$axios.post('/graphql',
        {
          query: getProjectBySlug,
          variables: {
            slug: this.$route.params.slug
          }
        }
      )
        .then(res => res.data.data.projects[0])
    } catch (err) {
      console.log(err)
    }
  },

  data () {
    return {
      project: {}
    }
  },

  head () {
    return {
      title: `${this.project.title} - Crowfund`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.shortDescription
        }
      ]
    }
  }
}
</script>
