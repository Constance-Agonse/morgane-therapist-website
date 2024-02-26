<template>
  <div class="w-[386px] h-[510px] bg-white flex flex-col items-center rounded-md p-5 gap-6">
    <div class="text-center text-dark-green">
      <i :class="icon" class="text-3xl mb-2"></i>
      <h3 class="font-title">{{ title }}</h3>
    </div>
    <div class="font-body text-center text-base">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallCard',
  props: {
    title: String,
    icon: String
  },
  data() {
    return {
    }
  }

}
</script>

