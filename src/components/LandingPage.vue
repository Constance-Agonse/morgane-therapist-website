<template>
  <div class="px-28 bg-light-green font-title text-dark-green text-4xl flex items-center leading-relaxed" id="text" :style="{ height: `${height}px` }">
    Psychologue diplômée et psychothérapeute, j'accueille les adultes et également les jeunes enfants et les adolescents,
    sur rendez-vous au cabinet.
  </div>
</template>


<script>
// import SplitType from 
export default {
  name: 'LandingPage',
  props: {
    msg: String,
    height: {
      type: Number,
      required: true,
    }
  }
}
// let text = new SplitType('#text');
// let characters = document.querySelectorAll('.char');
// for (let i=0; i<characters.length; i++) {
//   characters[i].classList.add('translate-y-full');
// }
</script>
