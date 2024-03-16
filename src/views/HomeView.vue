<template>
  <div class="z-30 fixed h-screen w-screen flex items-center justify-center" v-if="isDesktop && isAppointmentModalShown">
    <TakeAppointmentModal @closeAppointmentModal="toggleAppointmentModal()" />
  </div>
  <ModalMobile v-if="!isDesktop && isModalDisplayed" @toggleModalView="toggleSmallCard()" class="fixed z-40"
    :content="thematicOnFocus" />
  <div class="bg-light-green" :class="{ 'overflow-hidden': isModalDisplayed }">
    <div>
      <HeaderTopDesktop v-if="isDesktop" class="sticky top-0 z-10" ref="header" id="header" @appointmentClicked="toggleAppointmentModal()" />
      <HeaderTopMobile v-if="!isDesktop" class="sticky top-0 z-10" ref="header" id="header"/>
      <div class="p-6" :class="{ 'px-28': isDesktop, 'overflow-hidden': isModalDisplayed }">
        <LandingPage v-if="isDesktop" :height="contentHeight" class="h-full max-w-[850px]" id="landing" />
        <div v-if="!isDesktop">
          <div v-for="thematic in contentData" :key="thematic.title" class="pb-6 max-w-[850px]" id="pro"> 
            <div v-if="thematic.titleSmall">
              <ContentCardSmall :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)" />
            </div>
          </div>
          <ClusterCardsMobile :content="contentDataGrouped" @toggleModalView="toggleSmallCard($event)"></ClusterCardsMobile>
        </div>
        <div v-if="isDesktop">
          <div v-for="thematic in contentData" :key="thematic.title" class="pb-14 text-base max-w-[850px]" :id="thematic.id">
            <div v-if="thematic.isDisplayedInBigScreen">
              <ContentCard :thematic="thematic" class="relative" @toggleModalView="toggleSmallCard(thematic)">
                <ProCV v-if="thematic.id === 'pro'" isDesktop />
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
import HeaderTopDesktop from '@/components/HeaderTopDesktop.vue'
import HeaderTopMobile from '@/components/HeaderTopMobile.vue'
import LandingPage from '@/components/LandingPage.vue'
import FooterEnd from '@/components/FooterEnd.vue'
import PraticalSection from '@/components/PraticalSection.vue'
import ProCV from '@/components/ProCV.vue'
import TakeAppointmentModal from '@/components/TakeAppointmentModal.vue'
import ModalMobile from '@/components/ModalMobile.vue'
import ClusterCardsMobile from '@/components/ClusterCardsMobile.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTopDesktop,
    HeaderTopMobile,
    ContentCardSmall,
    ContentCard,
    LandingPage,
    FooterEnd,
    PraticalSection,
    ProCV,
    TakeAppointmentModal,
    ModalMobile,
    ClusterCardsMobile
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
    this.calculateContentHeight();
    window.addEventListener('resize', this.calculateContentHeight);
    this.adjustScrollForFixedHeader();
  },
  methods: {
    calculateContentHeight() {
      const headerHeight = this.$refs.header.$el.offsetHeight;
      this.contentHeight = window.innerHeight - headerHeight;
    },
    toggleAppointmentModal() {
      this.isAppointmentModalShown = !this.isAppointmentModalShown;
    },
    toggleSmallCard(thematic) {
      this.thematicOnFocus = thematic;
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
