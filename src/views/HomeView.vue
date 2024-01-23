<template>
  <div class="home">
    <HeaderTop/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTop from '@/components/HeaderTop.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTop
  }
}
</script>
