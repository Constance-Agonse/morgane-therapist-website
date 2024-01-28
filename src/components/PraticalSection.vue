<template>
  <div class="flex flex-row items-center gap-6 bg-light-green">
    <SmallCard title="Prendre rendez-vous" icon="fa-regular fa-calendar-check">
      <div class="flex flex-col gap-6 items-center">
        <div>
          Je suis joignable par téléphone pour toute question ou précision préalable. J’accueille les patients le mardi de
          9h à 20h.
        </div>
        <div>Le cabinet, situé dans le 18e arrondissement de Paris, est un petit cabinet paramédical où travaillent
          plusieurs psychologues, une infirmière, un ostéopathe.
        </div>
        <a href="tel:0783100732" class="flex flex-row gap-2 items-center transition-scale duration-300 ease-in-out hover:scale-[1.025] hover:text-dark-green">
          <i class="fa-solid fa-phone"></i>
          07 83 10 07 32
        </a>
      </div>

    </SmallCard>

    <SmallCard title="Accéder au cabinet" icon="fa-solid fa-location-dot">
      <div class="flex flex-col gap-6 items-center">
        <div class="font-title">13 Rue du Baigneur, 75018 Paris</div>
        <div>
          <div class="font-title">Moyens de transport :</div>
          <div>Métro - Jules Joffrin (ligne 12)</div>
          <div>Bus - Custine - Mont-Cenis (lignes 80 et Montmar)</div>
          <div>Bus - Lamarck - Mont Cenis (ligne Montmar)</div>
        </div>
        <div>
          <div class="font-title">Informations pratiques :</div>
          <div>Rez-de-chaussée</div>
        </div>

        <a href="https://maps.app.goo.gl/twRmMPLQjk9Rocb66" target="_blank"
          class="bg-dark-green rounded-md py-1 px-4 text-green transition-all duration-300 ease-in-out hover:scale-[1.025] hover:text-light-green">
          Localiser le cabinet sur une carte</a>

      </div>

    </SmallCard>

    <SmallCard title="A savoir" icon="fa-solid fa-circle-info">
      <div class="flex flex-col gap-6 items-center">
        <div>
          <div class="font-title">Consultation de psychologie 60 €</div>
          <div class="text-xs">Ces honoraires vous sont communiqués à titre indicatif par le praticien et peuvent varier
            selon le type de soins, le nombre de consultations et les actes additionnels nécessaires.
          </div>
        </div>

        <div class="font-title">Consultation non remboursée par l'Assurance Maladie</div>
        <div>
          <div class="font-title">Moyens de paiement :</div>
          Cartes bancaires non acceptées
          Chèques et espèces
        </div>
      </div>
    </SmallCard>
  </div>
</template>

<script>
import SmallCard from './SmallCard.vue';
export default {
  name: 'PraticalSection',
  props: {
    msg: String
  },
  components: {
    SmallCard
  },
  data() {
    return {
    }
  }

}
</script>

