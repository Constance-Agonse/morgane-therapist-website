<template>
  <div class="z-30 fixed h-screen w-screen flex items-center justify-center" v-if="isDesktop && isAppointmentModalShown">
    <TakeAppointmentModal @closeAppointmentModal="toggleAppointmentModal()" />
  </div>
  <ModalPhone v-if="!isDesktop && isModalDisplayed" @toggleModalView="toggleSmallCard()" class="fixed z-40"
    :content="thematicOnFocus" />
  <div class="bg-light-green" :class="{ 'overflow-hidden': isModalDisplayed }">
    <div>
      <HeaderTop v-if="isDesktop" class="sticky top-0 z-10" ref="header" id="header" @appointmentClicked="toggleAppointmentModal()" />
      <HeaderTopSmall v-if="!isDesktop" class="sticky top-0 z-10" ref="header" />
      <div class="p-6" :class="{ 'px-28': isDesktop, 'overflow-hidden': isModalDisplayed }">
        <LandingPage v-if="isDesktop" :height="contentHeight" class="h-full max-w-[850px]" id="landing" />
        <div v-if="!isDesktop">
          <div v-for="thematic in contentData" :key="thematic.title" class="pb-6 max-w-[850px]" id="pro"> 
            <div v-if="thematic.titleSmall">
              <ContentCardSmall :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)" />
            </div>
          </div>
          <SmallGroupCards :content="contentDataGrouped" @toggleModalView="toggleSmallCard($event)"></SmallGroupCards>
        </div>
        <div v-if="isDesktop">
          <div v-for="thematic in contentData" :key="thematic.title" class="pb-14 text-base max-w-[850px]" :id="thematic.id">
            <div v-if="thematic.isDisplayedInBigScreen">
              <ContentCard :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)">
                <ProCV v-if="thematic.id === 'pro'" isDesktop="true" />
              </ContentCard>
            </div>
          </div>
        </div>
        <PraticalSection v-if="isDesktop" class="pb-14" id="pratical" />
      </div>
      <FooterEnd v-if="isDesktop" />
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
    const isDesktop = ref(false);
    watchEffect(() => {
      if (screenWidth.value > 1024) { // Adjust the breakpoint as needed
        isDesktop.value = true;
      } else {
        isDesktop.value = false;
      }
    });

    return {
      screenWidth,
      isDesktop
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
    this.adjustScrollForFixedHeader();
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
    toggleAppointmentModal() {
      this.isAppointmentModalShown = !this.isAppointmentModalShown;
    },
    toggleSmallCard(thematic) {
      console.log('truc:', thematic)
      this.thematicOnFocus = thematic;
      console.log('this.thematicOnFocus:', this.thematicOnFocus)
      this.isModalDisplayed = !this.isModalDisplayed;
      if (this.isModalDisplayed) document.body.classList.add('overflow-hidden');
      else if (!this.isModalDisplayed) document.body.classList.remove('overflow-hidden');
    },
    adjustScrollForFixedHeader() {
      const header = document.querySelector('#header');
      if (!header) return;
  
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          const offset = header.offsetHeight;
          window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth' 
          });
        });
      });
    }
  },
}
</script>
