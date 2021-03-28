<template>
  <div class="relative text-center md:text-left">
    <div
      class="mb-2 text-[2rem] font-bold leading-10"
    >
      <slot name="title" />
    </div>
    <div class="text-sm leading-4 text-gray-800 lead">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectMeta'
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
