<template>
  <div class="z-30 fixed h-screen w-screen flex items-center justify-center" v-if="isBigScreen && isAppointmentModalShown"
    @click.stop="showAppointmentModal()">
    <TakeAppointmentModal />
  </div>
  <div v-if="isBigScreen && isAppointmentModalShown" class="fixed top-0 z-20 h-screen w-screen bg-darker-green opacity-60"></div>
  <ModalPhone v-if="!isBigScreen && isModalDisplayed" @toggleModalView="toggleSmallCard()" class="fixed z-40"
    :content="thematicOnFocus" />
  <div class="bg-light-green" :class="{ 'overflow-hidden': isModalDisplayed }">
    <div>
      <HeaderTop v-if="isBigScreen" class="sticky top-0 z-10" ref="header" @appointmentClicked="showAppointmentModal()"/>
      <HeaderTopSmall v-if="!isBigScreen" class="sticky top-0 z-10" ref="header" @appointmentClicked="showAppointmentModal()" />
      <div class="p-6" :class="{ 'px-28': isBigScreen, 'overflow-hidden': isModalDisplayed }">
        <LandingPage v-if="isBigScreen" :height="contentHeight" class="h-full max-w-[850px]" id="landing" />
        <div v-if="!isBigScreen">
          <div v-for="thematic in contentData" :key="thematic.title" class="pb-6 max-w-[850px]" id="pro">
            <div v-if="thematic.titleSmall">
              <ContentCardSmall :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)"/>
            </div>
          </div>
          <SmallGroupCards :content="contentDataGrouped" @toggleModalView="toggleSmallCard($event)"></SmallGroupCards>
        </div>
        <div v-if="isBigScreen">
          <div v-for="thematic in contentData" :key="thematic.title" class="pb-14 text-base max-w-[850px]" id="pro">
            <div v-if="thematic.isDisplayedInBigScreen">
              <ContentCard :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)">
              <ProCV v-if="thematic.id === 'pro'" />
            </ContentCard>
            </div>
          </div>
        </div>
        <PraticalSection v-if="isBigScreen" class="pb-14" id="pratical" />
      </div>
      <FooterEnd v-if="isBigScreen" />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted } from 'vue';
import ContentCardSmall from '@/components/ContentCardSmall.vue'
import ContentCard from '@/components/ContentCard.vue'
import contentData from '@/assets/content.json'
import contentDataGrouped from '@/assets/contentGrouped.json'
import HeaderTop from '@/components/HeaderTop.vue'
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
    HeaderTop,
    HeaderTopSmall,
    ContentCardSmall,
    ContentCard,
    LandingPage,
    FooterEnd,
    PraticalSection,
    ProCV,
    TakeAppointmentModal,
    ModalPhone,
    SmallGroupCards
  },
  setup() {
    const screenWidth = ref(window.innerWidth);
    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };
    watchEffect(() => {
      window.addEventListener('resize', updateScreenWidth);
      return () => {
        window.removeEventListener('resize', updateScreenWidth);
      };
    });
    onMounted(() => {
      window.addEventListener('resize', updateScreenWidth);
    });
    const isBigScreen = ref(false);
    watchEffect(() => {
      if (screenWidth.value > 1024) { // Adjust the breakpoint as needed
        isBigScreen.value = true;
      } else {
        isBigScreen.value = false;
      }
    });

    return {
      screenWidth,
      isBigScreen
    };
    
  },
  data() {
    return {
      contentData,
      contentHeight: 0,
      isAppointmentModalShown: false,
      isModalDisplayed: false,
      contentDataGrouped,
    }
  },
  mounted() {
    console.log('mounted:')
    // console.log('screenWidth:', this.screenWidth)
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
      if (this.isModalDisplayed) document.body.classList.add('overflow-hidden');
      else if (!this.isModalDisplayed) document.body.classList.remove('overflow-hidden');
    }
  },
}
</script>
