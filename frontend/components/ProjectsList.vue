<template>
  <div class="projects-list pb-10 max-w-[730px] mx-auto space-y-6 transform -translate-y-14">
    <article
      v-for="project in projects"
      :key="project.id"
      class="bg-white px-6 pt-[52px] pb-10 rounded-lg border border-black border-opacity-5"
    >
      <h1 class="mb-4 text-xl text-center font-bold leading-6 transition-colors duration-300 hover:text-cyan-900">
        <NuxtLink :to="`project/${project.slug}`">
          {{ project.title }}
        </NuxtLink>
      </h1>

      <p class="mb-6 text-center text-gray-800 text-sm leading-6">
        {{ project.shortDescription }}
      </p>

      <div class="flex justify-center">
        <Button :to="`project/${project.slug}`">
          Visit this project
        </Button>
      </div>
    </article>

    <div
      v-if="!projects.length"
      class="bg-white px-6 py-10 rounded-lg border border-black border-opacity-5"
    >
      Sorry, no project found :'(
    </div>
  </div>
</template>

<script>
export default {

  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
