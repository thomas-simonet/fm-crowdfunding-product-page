<template>
  <header
    class="absolute top-0 inset-x-0"
    :class="{ 'menu-is-active': menuActive }"
  >
    <nav
      class="relative z-20 flex justify-between pt-8 px-6"
    >
      <NuxtLink
        to="/"
        rel="home"
      >
        <img src="~/assets/images/logo.svg" alt="crowdfund">
      </NuxtLink>

      <button
        @click="menuActive = ! menuActive"
      >
        <Transition
          name="fade"
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
        class="absolute top-[88px] inset-x-6"
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
            <NuxtLink to="about">
              About
            </NuxtLink>
          </li>

          <li
            v-if="menuActive"
            key="discover"
            class="p-6 bg-white text-lg font-medium leading-[22px] border border-t border-b border-gray-900 border-opacity-10"
          >
            <NuxtLink to="discover">
              Discover
            </NuxtLink>
          </li>

          <li
            v-if="menuActive"
            key="started"
            class="p-6 bg-white text-lg font-medium leading-[22px] rounded-b-lg"
          >
            <NuxtLink to="get-started">
              Get Started
            </NuxtLink>
          </li>
        </TransitionGroup>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

  data () {
    return {
      menuActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  min-height: 300px;
  overflow: hidden;

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

.fade-enter-active,
.fade-leave-active {
  transition: all .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter { transform: translateX(100%); }
.fade-leave-to { transform: translateX(-100%); }

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
