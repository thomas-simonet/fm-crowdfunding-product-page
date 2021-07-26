<template>
  <div class="flex items-center py-6 px-7 border-t border-black border-opacity-15">
    <p>Enter your pledge</p>
    <PledgeSelector
      class="ml-auto"
      :min="25"
    />
    <Button
      class="btn-small ml-4"
      type="submit"
    >
      Continue
    </Button>
  </div>
</template>

<script>
export default {
  name: 'RewardForm'
}
</script>
