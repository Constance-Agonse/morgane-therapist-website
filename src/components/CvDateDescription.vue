<template>
  <div class="flex flex-row gap-12">
    <div class="min-w-[110px]">{{line.date}}</div>
    <div>{{line.content}}</div>
  </div>
</template>

<script>
export default {
  name: 'CvDateDescription',
  props: {
    line: Object,
  },
}
</script>

