<template>
  <div
    id="modal"
    ref="modalContainer"
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
          :is="child"
          :params="params"
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
      child: null,
      childLoaded: false,
      params: null
    }
  },

  watch: {
    childLoaded (childLoaded) {
      if (childLoaded) {
        const container = this.$refs.modalContainer

        const focusTrap = createFocusTrap(container, {
          clickOutsideDeactivates: true,
          onActivate: () => (container.classList.add('trap', 'is-active')),
          onDeactivate: () => (container.classList.remove('is-active')),
          /**
           * 1. Focus the reward corresponding on which button the user clicked
           * 2. If no input are checked just focus the first one.
           */
          initialFocus: () => {
            // 1
            const checked = document.querySelector('.modal__container :checked')
            if (checked) {
              return checked
            }
            // End 1
            return document.querySelector('.modal__container input') // 2
          }
        })

        this.$modal.show('modal', {
          disableScroll: true,
          disableFocus: true,
          onShow: () => {
            focusTrap.activate()
          },
          onClose: () => {
            this.child = null
            this.childLoaded = false
            this.params = null

            focusTrap.deactivate()
          }
        })
      }
    }
  },

  beforeMount () {
    this.$nuxt.$on('open-modal', (options) => {
      this.child = options.component
      this.childLoaded = false
      this.params = options?.params
    })
  }
}
</script>
