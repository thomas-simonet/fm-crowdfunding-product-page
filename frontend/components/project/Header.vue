<template>
  <header>
    <div class="pt-[52px] project-block">
      <h1 class="mb-4 text-xl text-center font-bold leading-6 sm:text-3xl">
        {{ project.title }}
      </h1>

      <p class="mb-6 text-center text-gray-800 text-sm leading-6 md:text-base md:leading-5">
        {{ project.shortDescription }}
      </p>

      <div class="flex justify-between">
        <Button>
          Back this project
        </Button>

        <Bookmark :bookmarked="false" />
      </div>
    </div>

    <div class="project-block pt-8 sm:py-12">
      <div class="mb-8 space-y-12 sm:mb-9 sm:space-y-0 sm:grid sm:grid-cols-3 md:grid-cols-[179px 1fr 227px]">
        <ProjectMeta>
          <template #title>
            $89,914
          </template>
          <template #description>
            {{ `of $${project.goal} backed` }}
          </template>
        </ProjectMeta>

        <ProjectMeta class="separator">
          <template #title>
            5,007
          </template>
          <template #description>
            total backers
          </template>
        </ProjectMeta>

        <ProjectMeta class="separator">
          <template #title>
            {{ daysLeft }}
          </template>
          <template #description>
            days left
          </template>
        </ProjectMeta>
      </div>

      <ProjectProgress :progress="90" />
    </div>
  </header>
</template>

<script>
export default {

  name: 'ProjectHeader',

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  computed: {
    daysLeft () {
      return Math.ceil((new Date(this.project.dateEnd) - new Date()) / (1000 * 60 * 60 * 24))
    }
  }
}
</script>
