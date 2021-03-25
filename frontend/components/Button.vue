<template>
  <button
    class="py-4 text-white font-body font-bold rounded-[2rem] transition-all duration-300 "
    :class="[ !disabled ? activeClass : disabledClass, type === 'normal' ? normalClass : smallerClass ]"
  >
    <slot />
  </button>
</template>

<script>
export default {

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'normal'
    }
  },

  data () {
    return {
      activeClass: 'bg-cyan-500 hover:bg-cyan-900',
      disabledClass: 'bg-gray-900 bg-opacity-50 pointer-events-none',

      normalClass: 'px-[42px] text-base leading-5',
      smallerClass: 'px-8 text-sm leading-none'
    }
  }
}
</script>
