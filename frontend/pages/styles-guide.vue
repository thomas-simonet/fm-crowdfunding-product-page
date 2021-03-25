<template>
  <div class="container p-6">
    <div class="mb-4">
      <Button>Back this project</Button>

      <Button :disabled="true">
        Out of stock
      </Button>

      <Button
        class="mt-4"
        type="smaller"
      >
        Back this project
      </Button>

      <Button
        type="smaller"
        :disabled="true"
      >
        Out of stock
      </Button>
    </div>

    <div class="mb-4">
      <Progress :progress="70" />
    </div>

    <div class="mb-4">
      <Bookmark />
    </div>

    <div class="mb-4">
      <PledgeSelector
        :min="1"
        :max="9999"
      />
    </div>

    <div class="mb-4 space-y-6">
      <Reward :reward="rewards[0]" />
      <Reward :reward="rewards[1]" />
    </div>

    <div class="mb-4 space-y-12">
      <ProjectMeta>
        <template #title>
          {{ `$${project.backed}` }}
        </template>
        <template #description>
          {{ `of $${project.maximumBack} backed` }}
        </template>
      </ProjectMeta>
      <ProjectMeta class="border">
        <template #title>
          {{ project.totalBackers }}
        </template>
        <template #description>
          total backers
        </template>
      </ProjectMeta>
      <ProjectMeta class="border">
        <template #title>
          {{ project.daysLeft }}
        </template>
        <template #description>
          days left
        </template>
      </ProjectMeta>
    </div>
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
