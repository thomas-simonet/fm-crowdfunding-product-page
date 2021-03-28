<template>
  <article
    v-if="!$fetchState.pending"
    class="single-project"
  >
    <div class="h-[244px]">
      <img
        class="w-full h-[300px] object-cover"
        :src="`http://localhost:1337${project.thumbnail.url}`"
        loading="lazy"
        alt=""
      >
    </div>
    <div class="relative px-6 max-w-[730px] mx-auto">
      <ProjectHeader :project="project" />
      <ProjectBody :project="project" />
    </div>
  </article>
</template>

<script>
import { Project } from '~/common/graphql/query'

export default {

  async fetch () {
    try {
      this.project = await this.$axios.post('/graphql',
        {
          query: Project,
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

  fetchDelay: 300,

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
