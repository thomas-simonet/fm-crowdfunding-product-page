<template>
  <div class="bg-white px-6 py-10 border rounded-lg border-black border-opacity-5">
    <h1 class="mb-4 text-xl font-bold leading-6">
      Sorry, Page not found
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore provident nisi architecto id totam iusto laborum deleniti laboriosam similique mollitia, expedita reprehenderit quia, sequi pariatur molestiae itaque excepturi dolore?</p>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('header/SET_HEADER_THUMBNAIL', 'https://source.unsplash.com/random/2400x400')
  }
}
</script>
