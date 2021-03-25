<template>
  <div class="relative text-center sm:text-left">
    <div
      class="mb-2 text-[2rem] font-bold leading-10"
    >
      <slot name="title" />
    </div>
    <div class="text-sm leading-[17px] text-gray-800">
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
}
</style>
