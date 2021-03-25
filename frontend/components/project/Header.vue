<template>
  <header>
    <img
      src="~/assets/images/image-hero-mobile.jpg"
      alt=""
    >

    <div
      class="mb-6 max-w-[327px] mx-auto bg-white transform -translate-y-14 px-6 pt-[52px] pb-10 rounded-lg border border-black border-opacity-5"
    >
      <h1
        class="mb-4 text-xl text-center font-bold leading-6"
      >
        Mastercraft Bamboo Monitor Riser
      </h1>

      <p
        class="mb-6 text-center text-gray-800 text-sm leading-6"
      >
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>

      <div
        class="flex justify-between"
      >
        <Button>
          Back this project
        </Button>

        <Bookmark
          :bookmarked="false"
        />
      </div>
    </div>

    <div
      class="max-w-[327px] mx-auto bg-white transform -translate-y-14 pt-8 px-6 pb-10 rounded-lg border border-black border-opacity-5 space-y-12"
    >
      <ProjectMeta>
        <template #title>
          {{ `$${project.backed}` }}
        </template>
        <template #description>
          {{ `of $${project.maximumBack} backed` }}
        </template>
      </ProjectMeta>

      <ProjectMeta class="separator">
        <template #title>
          {{ project.totalBackers }}
        </template>
        <template #description>
          total backers
        </template>
      </ProjectMeta>

      <ProjectMeta class="separator">
        <template #title>
          {{ project.daysLeft }}
        </template>
        <template #description>
          days left
        </template>
      </ProjectMeta>

      <ProjectProgress
        progress="90"
      />
    </div>
  </header>
</template>

<script>
export default {

  name: 'ProjectHeader',

  data () {
    return {
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
