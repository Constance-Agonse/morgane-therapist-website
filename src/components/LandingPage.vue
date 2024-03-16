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
// import SplitType from 'split-type';
// import { useMotion } from '@vueuse/motion';

export default {
  name: 'LandingPage',
  props: {
    msg: String,
    height: {
      type: Number,
      required: true,
    }
  },
  setup() {
  },

}
/* eslint-disable */
// let text = new SplitType('#text');
// console.log('text:', text)
// let characters = document.querySelectorAll('.char');
// for (let i = 0; i < characters.length; i++) {
//   characters[i].classList.add('translate-y-full');
// }
</script>
