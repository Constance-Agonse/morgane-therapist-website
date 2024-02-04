<template>
  <div class="z-30 fixed h-screen w-screen flex items-center justify-center" v-if="isAppointmentModalShown" @click.stop="showAppointmentModal()">
    <TakeAppointmentModal />
  </div>
  <div v-if="isAppointmentModalShown" class="fixed top-0 z-20 h-screen w-screen bg-darker-green opacity-60"></div>
  <div class="bg-light-green">
    <HeaderTop class="sticky top-0 z-10" ref="header" @appointmentClicked="showAppointmentModal()"/>
    <div class="px-28">
      <LandingPage :height="contentHeight" class="h-full max-w-[850px]" id="landing" />
      <div v-for="content in contentData" :key="content.title" class="pb-14 text-base max-w-[850px]" id="pro">
        <ContentCard :title="content.title" :content="content.content" :id="content.id" class="relative">
          <ProCV v-if="content.id === 'pro'"/>
        </ContentCard>
      </div>
      <PraticalSection class="pb-14" id="pratical"/>
    </div>
    <FooterEnd />
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import contentData from '@/assets/content.json'
import HeaderTop from '@/components/HeaderTop.vue'
import LandingPage from '@/components/LandingPage.vue'
import FooterEnd from '@/components/FooterEnd.vue'
import PraticalSection from '@/components/PraticalSection.vue'
import ProCV from '@/components/ProCV.vue'
import TakeAppointmentModal from '@/components/TakeAppointmentModal.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTop,
    ContentCard,
    LandingPage,
    FooterEnd,
    PraticalSection,
    ProCV,
    TakeAppointmentModal
  },
  data() {
    return {
      contentData,
      contentHeight: 0,
      isAppointmentModalShown: false
    }
  },
  mounted() {
    console.log('mounted:')
    // Calculate content height when the component is mounted
    this.calculateContentHeight();
    // Recalculate content height when the window is resized
    window.addEventListener('resize', this.calculateContentHeight);
  },
  methods: {
    calculateContentHeight() {
      console.log('calculateContentHeight:')
      // Get the height of the header
      const headerHeight = this.$refs.header.$el.offsetHeight;
      console.log('headerHeight:', headerHeight)
      // Calculate the remaining height of the screen
      this.contentHeight = window.innerHeight - headerHeight;
      console.log('this.contentHeight:', this.contentHeight)
    },
    showAppointmentModal() {
      this.isAppointmentModalShown =! this.isAppointmentModalShown; 
    }
  },
}
</script>
