<template>
  <div class="px-28 bg-light-green font-title text-dark-green text-4xl flex items-center leading-relaxed" 
    :style="{ height: `${height}px` }">
    <h1 id="text" v-motion-slide-top>
      Psychologue diplômée et psychothérapeute, j'accueille les adultes et également les jeunes enfants et les
      adolescents,
      sur rendez-vous au cabinet.
    </h1>

  </div>
</template>
<script>

export default {
  name: 'LandingPage',
  props: {
    height: {
      type: Number,
      required: true,
    }
  },
  setup() {
  },
}

</script>
