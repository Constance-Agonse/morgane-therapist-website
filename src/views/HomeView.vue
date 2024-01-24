<template>
  <div>
    <HeaderTop class="sticky top-0" />
    <div class="pl-28 pb-14 bg-light-green" v-for="content in contentData" :key="content.title">
      <ContentCard :title="content.title" :content="content.content"></ContentCard>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
import contentData from '@/assets/content.json'
import HeaderTop from '@/components/HeaderTop.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTop,
    ContentCard,
  },
  data() {
    return {
      contentData,
    }
  },
}
</script>
