<template>
  <div class="bg-light-green font-title text-dark-green text-4xl flex items-center leading-relaxed" 
    :style="{ height: `${height}px` }">
    <h1 id="text" v-motion-slide-top>
      Psychologue diplômée et psychothérapeute, j'accueille les adultes, les adolescents ainsi que les jeunes enfants, sur rendez-vous au cabinet. J’accueille également les familles, le(s) parent(s) avec leur bébé et les couples.
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
