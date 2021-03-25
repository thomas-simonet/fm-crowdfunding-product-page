<template>
  <button
    class="group flex h-14 font-body font-bold text-base leading-5 rounded-[2rem] transition-all duration-300"
    :class="[ !bookmarked ? 'bg-gray-200' : 'bg-cyan-100' ]"
    @click="bookmarked = ! bookmarked"
  >
    <div
      class="grid place-items-center transition-all duration-300 rounded-[2rem] w-[56px]"
      :class="[ !bookmarked ? 'bg-gray-900 group-hover:bg-gray-800 text-gray-600' : 'bg-cyan-900 text-white' ]"
    >
      T
    </div>
    <div
      class="grid place-items-center ml-4 pr-6 rounded-[2rem] sr-only"
      :class="[ !bookmarked ? 'text-gray-800' : 'text-cyan-900' ]"
    >
      {{ bookmarked ? 'Bookmarked' : 'Bookmark' }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    bookmarked: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
