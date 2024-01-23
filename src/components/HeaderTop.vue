<template>
  <div class="">
    <div class="bg-green text-dark-green flex flex-row justify-between font-title py-3.5 px-7">
      <div class="flex flex-col text-left">
        <h1>Morgane Joulié</h1>
        <h3>Psychologue clinicienne</h3>
      </div>
      <div class="flex flex-col text-right">
        <p>13 Rue du Baigneur, 75018 Paris</p>
        <p>07 83 10 07 32</p>
      </div>
    </div>
    <div class="bg-dark-green text-green flex flex-row justify-between font-body py-3.5 px-7 uppercase">
      <div>Les consultations</div>
      <div>Parcours professionnel</div>
      <div>INFORMATIONS PRATIQUES</div>
      <div>prendre rendez-vous</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    msg: String
  }
}
</script>

