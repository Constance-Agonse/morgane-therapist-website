<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <div class="font-title">Diplômes nationaux et universitaires</div>
      <CvDateDescription :line="contentCv.diplomas[0]" :isDesktop="isDesktop"/>
    </div>
    <div class="flex flex-col gap-3">
      <div class="font-title">Autres formations</div>
      <CvDateDescription v-for="(course, index) in contentCv.courses" :key="index" :line="course" :isDesktop="isDesktop"/>
    </div>
  </div>
  <div v-if="showMoreInfo" class="flex flex-col gap-3 mt-4">
    <div class="font-title">Expériences</div>
    <CvDateDescription v-for="(experience, index) in contentCv.experiences" :key="index" :line="experience" :isDesktop="isDesktop"/>
  </div>
  <button
    class="text-dark-green absolute right-10 bottom-3 text-small transition-all duration-300 ease-in-out hover:scale-[1.025] hover:text-darker-green hover:underline"
    @click="showMoreContent()">{{ showMoreInfo ? 'Voir moins' : 'Voir plus' }}</button>
</template>

<script>
import contentCv from '@/assets/CvContent.json'
import CvDateDescription from '@/components/CvDateDescription.vue'
export default {
  name: 'ProCV',
  components: { CvDateDescription },
  props: {
    isDesktop: Boolean,
  },
  data() {
    return {
      showMoreInfo: false,
      contentCv,
    }
  },
  methods: {
    showMoreContent() {
      this.showMoreInfo = !this.showMoreInfo;
    }
  }
}
</script>
