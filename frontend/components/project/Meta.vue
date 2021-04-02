<template>
  <div class="relative text-center md:text-left">
    <div
      class="mb-2 text-[2rem] font-bold leading-10"
    >
      {{ `${prefix}${valueAnimated}` }}
    </div>
    <div class="text-sm leading-4 text-gray-800 lead">
      <slot />
    </div>
  </div>
</template>

<script>
import animateNumber from '~/common/mixins/animateNumber.js'

export default {

  name: 'ProjectMeta',

  mixins: [animateNumber],

  props: {
    prefix: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      valueAnimated: 0
    }
  },

  mounted () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateNumber('valueAnimated', 0, this.value, 2000)
          observer.unobserve(this.$el)
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    })

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      observer.observe(this.$el)
    } else {
      this.valueAnimated = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.separator:before {
  content: "";
  display: block;
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);

  width: 80px;
  height: 1px;

  background-color: rgba($color: #000000, $alpha: 0.15);

  @media screen and (min-width: 640px) {
    top: 0;
    left: 0;
    transform: none;

    width: 1px;
    height: 63px;
  }
}

@media screen and (min-width: 768px) {
  .separator {
    padding-left: 42px;
  }
}
</style>
