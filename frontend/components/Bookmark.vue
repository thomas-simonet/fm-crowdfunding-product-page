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
      <svg width="10" height="18" viewBox="0 0 10 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V18L5 12.9419L10 18V0H0Z" />
      </svg>
    </div>

    <div
      class="grid place-items-center rounded-[2rem] sr-only sm:not-sr-only sm:ml-4 sm:pr-6"
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
