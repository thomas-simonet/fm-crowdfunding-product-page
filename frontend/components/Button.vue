<template>
  <NuxtLink
    v-if="to"
    class="btn"
    :to="to"
    :disabled="disabled"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    class="btn"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {

  props: {
    to: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
