<template>
  <div class="bg-light-green">
    <HeaderTop class="sticky"/>
    <div>Hello world!</div>
  </div>
  <router-view/>
</template>

<style>
</style>

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
