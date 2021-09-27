<template>
  <div>
    <div class="modal__header">
      <button
        class="modal__close"
        data-micromodal-close
      >
        <div />
        <div />
        <span class="sr-only">Close Modal</span>
      </button>
    </div>

    <div class="modal__content">
      <div class="flex flex-col items-center">
        <img src="~/assets/images/icon-success.svg" width="90" alt="">

        <div class="mt-12 mb-4 font-body text-2xl font-bold">
          Thanks for your support!
        </div>

        <p class="mb-8 leading-8 text-gray-800 text-center">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
        </p>

        <Button class="btn-small px-6" data-micromodal-close>
          Got it!
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RewardSuccess',

  mounted () {
    this.$emit('update:loaded', true)
  }
}
</script>

<style lang="scss">
.modal.modal-rewardsuccess .modal__container {
  width: 90%;
  max-width: 540px;
}
</style>
