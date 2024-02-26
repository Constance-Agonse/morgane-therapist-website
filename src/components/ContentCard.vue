<template>
  <div class="font-body">
    <div class="max-w-[850px] bg-white rounded-md p-6" :class="{'pb-8' : thematic.seeMore}">
      <h1 class="font-title pb-4">{{ thematic.title }}</h1>
      <div v-for="message in thematic.content" :key="message.index" class="pb-3">
        {{ message }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    thematic: Object,
  }
}
</script>
