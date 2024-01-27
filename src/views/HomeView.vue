<template>
  <div>
    <HeaderTop class="sticky top-0" ref="header"/>
    <LandingPage :height="contentHeight" class="h-full"/>
    <div class="pl-28 pb-14 bg-light-green" v-for="content in contentData" :key="content.title">
      <ContentCard :title="content.title" :content="content.content" :id="content.id"></ContentCard>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import contentData from '@/assets/content.json'
import HeaderTop from '@/components/HeaderTop.vue'
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTop,
    ContentCard,
    LandingPage
},
  data() {
    return {
      contentData,
      contentHeight: 0,
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
  },
}
</script>
