<template>
  <div class="">
    <a class="bg-green text-dark-green flex flex-row justify-between font-title py-3.5 px-7" href="#landing">
      <div class="flex flex-col text-left">
        <div  class="text-2xl">Morgane Joulié</div>
        <h3>Psychologue clinicienne</h3>
      </div>
      <div class="flex flex-col text-right">
        <p>13 Rue du Baigneur, 75018 Paris</p>
        <p>07 83 10 07 32</p>
      </div>
    </a>
    <div class="bg-dark-green text-green flex flex-row justify-between font-body py-3.5 px-7 uppercase">
      <a v-for="(navigation, index) in navigations" :key="index"
        class="transition-all duration-300 ease-in-out hover:scale-[1.025] hover:text-light-green" :href="navigation.id" @click="navigation.clickFunction">
        {{ navigation.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    msg: String
  },
  methods: {
    openAppointmentModal() {
      this.$emit('appointmentClicked');
    }
  },
  data() {
    return {
      navigations: [
        { id: '#consultation', name: 'Les consultations' },
        { id: '#pro', name: 'Parcours professionnel' },
        { id: '#pratical', name: 'Informations pratiques' },
        { clickFunction: this.openAppointmentModal, name: 'Prendre rendez-vous' },
      ]
    }
  },

}
</script>

