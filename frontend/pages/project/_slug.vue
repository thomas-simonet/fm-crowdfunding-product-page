<template>
  <article
    v-if="!$fetchState.pending"
    class="single-project"
  >
    <ProjectHeader />
    <ProjectBody />
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchProjectBySlug } from '~/common/graphql/query.js'

export default {

  async fetch () {
    try {
      const project = await this.$axios.post('/graphql', {
        query: fetchProjectBySlug,
        variables: {
          slug: this.$route.params.slug
        }
      })
      this.$store.commit('project/SET_PROJECT', project.data.data.projects[0])
      this.$store.commit('header/SET_HEADER_THUMBNAIL', `http://localhost:1337${this.getProject.thumbnail.url}`)
    } catch (err) {
      console.log(err)
    }
  },

  computed: {
    ...mapGetters('project', ['getProject'])
  },

  head () {
    return {
      title: `${this.getProject.title} - Crowfund`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getProject.shortDescription
        }
      ]
    }
  }
}
</script>
