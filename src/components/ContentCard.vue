<template>
  <div class="font-body">
    <div class="max-w-[850px] bg-white rounded-md p-6">
      <h1 class="font-title pb-4">{{ title }}</h1>
      <div v-for="message in content" :key="message.index" class="pb-3">
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
    title: String,
    content: Array,
  }
}
</script>
