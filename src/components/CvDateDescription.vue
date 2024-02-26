<template>
  <div v-if="isDesktop" class="flex flex-row gap-12">
    <div class="min-w-[110px]">{{line.date}}</div>
    <div>{{line.content}}</div>
  </div>
  <div v-else class="flex flex-row gap-4 text-sm font-body">
    <div class="min-w-[50px] max-w-[70px] font-bold">{{line.date}}</div>
    <div>{{line.content}}</div>
  </div>
</template> 

<script>
export default {
  name: 'CvDateDescription',
  props: {
    line: Object,
    isDesktop: Boolean
  },
}
</script>

