<template>
  <nav class="absolute z-20 flex justify-between top-8 inset-x-6 md:top-12 md:inset-x-[11.5%]">
    <NuxtLink
      to="/"
      rel="home"
    >
      <img src="~/assets/images/logo.svg" alt="crowdfund">
    </NuxtLink>

    <button
      class="md:hidden"
      @click="$emit('update:menuActive', !menuActive)"
    >
      <Transition
        name="fade-menu"
        mode="out-in"
      >
        <img v-if="!menuActive" key="open" src="~/assets/images/icon-hamburger.svg" alt="">
        <img v-else key="close" src="~/assets/images/icon-close-menu.svg" alt="">
      </Transition>

      <span class="sr-only">
        Menu
      </span>
    </button>

    <div
      class="absolute top-[88px] inset-x-0 md:hidden"
    >
      <TransitionGroup
        name="fade-delay"
        mode="out-in"
        tag="ul"
      >
        <li
          v-if="menuActive"
          key="about"
          class="p-6 bg-white text-lg font-medium leading-[22px] rounded-t-lg"
        >
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>

        <li
          v-if="menuActive"
          key="discover"
          class="p-6 bg-white text-lg font-medium leading-[22px] border border-t border-b border-gray-900 border-opacity-10"
        >
          <NuxtLink to="/discover">
            Discover
          </NuxtLink>
        </li>

        <li
          v-if="menuActive"
          key="started"
          class="p-6 bg-white text-lg font-medium leading-[22px] rounded-b-lg"
        >
          <NuxtLink to="/get-started">
            Get Started
          </NuxtLink>
        </li>
      </TransitionGroup>
    </div>

    <div class="hidden md:flex space-x-8 text-white text-sm font-medium">
      <NuxtLink
        class="hover:underline"
        to="about"
      >
        About
      </NuxtLink>

      <NuxtLink
        class="hover:underline"
        to="discover"
      >
        Discover
      </NuxtLink>

      <NuxtLink
        class="hover:underline"
        to="get-started"
      >
        Get Started
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {

  props: {
    menuActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all .3s;
}
.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.fade-menu-enter-active,
.fade-menu-leave-active {
  transition: all .3s;
}
.fade-menu-enter,
.fade-menu-leave-to {
  opacity: 0;
}

.fade-menu-enter { transform: translateX(100%); }
.fade-menu-leave-to { transform: translateX(-100%); }

.fade-delay-enter-active {
  &:nth-child(1) { transition: all .2s; }
  &:nth-child(2) { transition: all .3s; }
  &:nth-child(3) { transition: all .4s; }
}

.fade-delay-leave-active {
  &:nth-child(1) { transition: all .2s ease-out .2s; }
  &:nth-child(2) { transition: all .3s ease-out .1s; }
  &:nth-child(3) { transition: all .4s ease-out; }
}

.fade-delay-enter,
.fade-delay-leave-to {
  opacity: 0;
}

.fade-delay-enter { transform: translateX(100%); }
.fade-delay-leave-to { transform: translateX(-100%); }
</style>
