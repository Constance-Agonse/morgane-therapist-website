<template>
  <div class="font-body text-sm">
    <div class="max-w-[850px] bg-white rounded-md p-6">
      <div v-for="(item, index) in content" :key="index" class="flex flex-row w-full justify-between items-baseline border-b border-light-grey py-3" :class="{ '!border-0': index >= content.length-1}">
        <div class="flex flex-row gap-2 items-baseline">
          <i :class="item.icon"></i>
          <h1 class="font-title">{{ item.title }}</h1>
        </div>
        <button
          class="text-dark-green text-small transition-all duration-300 ease-in-out hover:scale-[1.025] hover:text-darker-green hover:underline"
          @click="showMoreContentSmall(item)">Voir plus</button>
      </div>
      <div v-for="(sentence, index) in content.firstContentSmall" :key="index">
       {{ sentence }}
      </div>
      <!-- TODO : ouvrir les petites cards à la façon des grandes cards -->
      <!-- <div v-if="isDesktop">
        <div v-for="message in content" :key="message.index" class="pb-3">
          {{ message }}
        </div>
      </div> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallGroupCards',
  props: {
    content: Array,
  },
  data() {
    return {
      isDesktop: false,
    }
  },
  methods : {
    showMoreContentSmall(id){
      this.$emit('toggleModalView', id);
    }
  },
}
</script>
