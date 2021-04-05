<template>
  <div
    id="modal"
    class="modal"
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
        <Component
          :is="view"
          :loaded.sync="childLoaded"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createFocusTrap } from 'focus-trap'

export default {
  data () {
    return {
      view: null,
      childLoaded: false
    }
  },

  watch: {
    childLoaded (childLoaded) {
      if (childLoaded) {
        const container = document.querySelector('#modal .modal__container')

        const focusTrap = createFocusTrap(container, {
          clickOutsideDeactivates: true,
          onActivate: () => (container.classList.add('trap', 'is-active')),
          onDeactivate: () => (container.classList.remove('is-active'))
        })

        this.$modal.show('modal', {
          disableScroll: true,
          onShow: (modal) => {
            focusTrap.activate()
          },
          onClose: (modal) => {
            this.view = null
            this.childLoaded = false

            focusTrap.deactivate()
          }
        })
      }
    }
  },

  beforeMount () {
    this.$nuxt.$on('open-modal', (view) => {
      this.view = view
    })
  }
}
</script>
