<template>
  <div class="z-40 bg-darker-green bg-opacity-50 h-full w-screen flex flex-col">
    <div @click="closeModal()" class="flex-grow"></div>
    <div class="w-screen min-h-[15%] max-h-[80%] bg-white fixed bottom-0 rounded-t-lg p-6 flex flex-col">
      <div class="flex flex-row justify-between items-baseline border-b border-light-grey">
        <div class="flex flex-row gap-2 items-baseline">
          <i :class="content.icon"></i>
          <h1 class="font-title pb-4">{{ content.titleSmall }}</h1>
        </div>
        <button @click="closeModal()">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div v-if="content.contentSmall" class="overflow-y-auto overflow-x-hidden min-h-[10%] max-h-[75%] mt-2">
        <div class="text-sm" v-for="(contentSentence, index) in content.contentSmall" :key="index"
          :class="contentSentence.class">
          <div class="mb-1" v-if="!contentSentence.type || contentSentence.type === 'link'" v-html="contentSentence.text" ></div>
          <a class="mb-1 font-title text-dark-green underline" v-if="contentSentence.type === 'phone'" :href="'tel:'+contentSentence.text">{{ contentSentence.text }}</a>
        </div>
      </div>
      <div v-if="content.contentSmallColumns" class="overflow-y-auto min-h-[10%] max-h-[75%] mt-2">
        <div class="flex flex-col gap-4">
          <div v-if="content.contentSmallColumns.diplomas" class="flex flex-col gap-3">
            <div class="font-title">Diplômes nationaux et universitaires</div>
            <CvDateDescription :line="content.contentSmallColumns.diplomas[0]" />
          </div>

          <div v-if="content.contentSmallColumns.courses" class="flex flex-col gap-3">
            <div class="font-title">Autres formations</div>
            <CvDateDescription v-for="(course, index) in content.contentSmallColumns.courses" :key="index"
              :line="course" />
          </div>

          <div v-if="content.contentSmallColumns.experiences" class="flex flex-col gap-3">
            <CvDateDescription v-for="(course, index) in content.contentSmallColumns.experiences" :key="index"
              :line="course" />
          </div>
        </div>
      </div>




    </div>
  </div>
</template>

<script>
import CvDateDescription from '@/components/CvDateDescription.vue'
export default {
  name: 'ModalPhone',
  props: {
    content: Object,
  },
  components: {
    CvDateDescription
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$emit('toggleModalView');
    }
  }
}
</script>
