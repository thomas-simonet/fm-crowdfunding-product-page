<template>
  <header
    class="relative h-[244px] md:h-[308px]"
    :class="{ 'menu-is-active': menuActive }"
  >
    <Transition name="fade" mode="out-in">
      <img
        :key="getThumbnail"
        :src="getThumbnail"
        class="w-full h-[300px] object-cover md:h-[400px]"
        loading="lazy"
        alt=""
      >
    </Transition>

    <!-- https://fr.vuejs.org/v2/guide/components-custom-events.html#Modificateur-sync -->
    <Nav :menu-active.sync="menuActive" />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      menuActive: false
    }
  },

  computed: {
    ...mapGetters('header', ['getThumbnail'])
  }
}
</script>

<style lang="scss" scoped>
header {
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 128px;
    z-index: 10;

    background: linear-gradient(#000, rgba(0,0,0,0.01));
    opacity: 0.6;
  }
}

header.menu-is-active {
  &:before {
    position: fixed;
    height: 100%;
    bottom: 0;
  }
}
</style>
