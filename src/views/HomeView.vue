<template>
  <div class="z-30 fixed h-screen w-screen flex items-center justify-center" v-if="isAppointmentModalShown"
    @click.stop="showAppointmentModal()">
    <TakeAppointmentModal />
  </div>
  <div v-if="isAppointmentModalShown" class="fixed top-0 z-20 h-screen w-screen bg-darker-green opacity-60"></div>
  <ModalPhone v-if="isModalDisplayed" @toggleModalView="toggleSmallCard()" class="fixed z-40"
    :content="thematicOnFocus">
  </ModalPhone>
  <div class="bg-light-green" :class="{ 'overflow-hidden': isModalDisplayed }">
    <div>
      <HeaderTopSmall class="sticky top-0 z-10" ref="header" @appointmentClicked="showAppointmentModal()" />
      <div class="p-6" :class="{ 'px-28': isBigScreen, 'overflow-hidden': isModalDisplayed }">
        <LandingPage v-if="isBigScreen" :height="contentHeight" class="h-full max-w-[850px]" id="landing" />
        <div v-for="thematic in contentData" :key="thematic.title" class="pb-14 text-base max-w-[850px]" id="pro">
          <ContentCardSmall :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)">
            <ProCV v-if="thematic.id === 'pro'" />
          </ContentCardSmall>
        </div>
        
        <SmallGroupCards :content="contentDataGrouped" @toggleModalView="toggleSmallCard($event)"></SmallGroupCards>
        <PraticalSection v-if="isBigScreen" class="pb-14" id="pratical" />
      </div>
      <FooterEnd v-if="isBigScreen" />
    </div>
  </div>
</template>

<script>
import ContentCardSmall from '@/components/ContentCardSmall.vue'
import contentData from '@/assets/content.json'
import contentDataGrouped from '@/assets/contentGrouped.json'
// import HeaderTop from '@/components/HeaderTop.vue'
import HeaderTopSmall from '@/components/HeaderTopSmall.vue'
import LandingPage from '@/components/LandingPage.vue'
import FooterEnd from '@/components/FooterEnd.vue'
import PraticalSection from '@/components/PraticalSection.vue'
import ProCV from '@/components/ProCV.vue'
import TakeAppointmentModal from '@/components/TakeAppointmentModal.vue'
import ModalPhone from '@/components/ModalPhone.vue'
import SmallGroupCards from '@/components/SmallGroupCards.vue'

export default {
  name: 'HomeView',
  components: {
    // HeaderTop,
    HeaderTopSmall,
    ContentCardSmall,
    LandingPage,
    FooterEnd,
    PraticalSection,
    ProCV,
    TakeAppointmentModal,
    ModalPhone,
    SmallGroupCards
  },
  data() {
    return {
      contentData,
      contentHeight: 0,
      isAppointmentModalShown: false,
      isBigScreen: false,
      isModalDisplayed: false,
      contentDataGrouped,
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
      this.isAppointmentModalShown = !this.isAppointmentModalShown;
    },
    toggleSmallCard(thematic) {
      console.log('truc:', thematic)
      this.thematicOnFocus = thematic;
      console.log('this.thematicOnFocus:', this.thematicOnFocus)
      this.isModalDisplayed = !this.isModalDisplayed;
      if (this.isModalDisplayed)  document.body.classList.add('overflow-hidden');
      else if (!this.isModalDisplayed) document.body.classList.remove('overflow-hidden');
    }
  },
}
</script>
