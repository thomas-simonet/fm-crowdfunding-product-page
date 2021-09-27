<template>
  <div class="relative">
    <span class="absolute top-1/2 left-6 transform -translate-y-1/2 font-body font-bold text-sm leading-none text-black text-opacity-25">
      {{ currency }}
    </span>

    <input
      :value="value"
      class="pl-10 py-4 font-body font-bold text-sm leading-none text-black border border-black border-opacity-15 rounded-[2rem] w-[100px] focus:border-cyan-500"
      type="number"
      :min="min"
      :max="max"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'PledgeSelector',

  props: {
    value: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: false,
      default: 9999
    },
    currency: {
      type: String,
      required: false,
      default: '$'
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
