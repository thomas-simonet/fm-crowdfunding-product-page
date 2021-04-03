<template>
  <div
    :id="id"
    class="modal micromodal-slide"
    aria-hidden="true"
  >
    <div
      class="modal__overlay"
      tabindex="-1"
      data-micromodal-close
    >
      <div
        class="modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-1-title"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
