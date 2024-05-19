<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class=" bg-white flex flex-col items-center rounded-md p-8 font-body relative z-30">
      <button @click="closeModal()" class="absolute top-2 right-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div>
        Pour le moment, la prise de rendez-vous se fait uniquement par téléphone au 07 83 10 07 32.
      </div>
      <div>J'accueille de nouveaux patients.</div>
    </div>
    <div class="fixed top-0 z-20 h-screen w-screen bg-darker-green opacity-60" @click="closeModal()"></div>
  </div>
</template>

<script>
export default {
  name: 'TakeAppointmentModal',
  props: {
  },
  methods: {
    closeModal() {
      this.$emit('closeAppointmentModal');
    }
  }
}
</script>

