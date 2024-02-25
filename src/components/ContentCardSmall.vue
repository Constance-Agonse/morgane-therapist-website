<template>
  <div class="font-body text-sm">
    <div class="max-w-[850px] bg-white rounded-md p-6">
      <div class="flex flex-row w-full justify-between items-baseline">
        <div class="flex flex-row gap-2">
          <i :class="thematic.icon"></i>
          <h1 class="font-title pb-4">{{ thematic.titleSmall }}</h1>
        </div>
        <button
          class="text-dark-green text-small transition-all duration-300 ease-in-out hover:scale-[1.025] hover:text-darker-green hover:underline"
          @click="showMoreContentSmall()">Voir plus</button>
      </div>
      <div v-for="(sentence, index) in thematic.firstContentSmall" :key="index">
       {{ sentence }}
      </div>
      <div v-if="isBigScreen">
        <div v-for="message in content" :key="message.index" class="pb-3">
          {{ message }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCardSmall',
  props: {
    thematic: Object,
  },
  data() {
    return {
      isBigScreen: false,
    }
  },
  methods : {
    showMoreContentSmall(){
      console.log('this.thematic.id:', this.thematic.id)
      this.$emit('toggleModalView', this.thematic.id);
    }
  }
}
</script>
