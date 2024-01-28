<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-3">
      <div class="font-title">Diplômes nationaux et universitaires</div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2015</div>
        <div>Master en psychologie : psychopathologie clinique psychanalytique - Parcours clinique et
          psychopathologies dans le domaine médical - École de Psychologues Praticiens (EPP)</div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <div class="font-title">Autres formations</div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">Depuis 2022</div>
        <div>Formation continue à l'APRTF (Association pour la recherche et le travail avec les familles)</div>
      </div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2018</div>
        <div>Attestation de formation au psychodrame psychanalytique individuel - Cerep-Phymentin</div>
      </div>
    </div>
    <div v-if="showMoreInfo" class="flex flex-col gap-3">
      <div class="font-title">Expériences</div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2021 - 2022</div>
        <div>Praticienne - Hôpital Delafontaine - Saint-Denis - Centre médico-psychologique (CMP) pour enfants
        </div>
      </div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2019 - 2022</div>
        <div>Praticienne - Association Cerep-Phymentin - Paris - Hôpital de jour (HDJ) pour adolescents</div>
      </div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2016 - 2021</div>
        <div>Praticienne - Hôpital André Mignot - Le Chesnay - Centre médico-psychologique (CMP)</div>
      </div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2016 - 2019</div>
        <div>Praticienne - Université de Versailles-Saint-Quentin-en-Yvelines (UVSQ) - Versailles - Service de médecine
          préventive et de promotion de la santé (SUMPPS)</div>
      </div>
      <div class="flex flex-row gap-12">
        <div class="min-w-[110px]">2015 - 2016</div>
        <div>Praticienne - Réseau de Promotion pour la Santé Mentale 78 Sud (RPSM 78) - Le Chesnay-Rocquencourt - Maison
          des adolescents (MDA) de Versailles</div>
      </div>
    </div>
    <button
      class="absolute right-10 bottom-3 text-small transition-scale duration-300 ease-in-out hover:scale-[1.025] hover:text-dark-green"
      @click="showMoreContent()">{{ showMoreInfo ? 'Voir moins' : 'Voir plus' }}</button>
  </div>
</template>

<script>
export default {
  name: 'ProCV',
  data() {
    return { showMoreInfo: false }
  },
  methods: {
    showMoreContent() {
      this.showMoreInfo = !this.showMoreInfo;
    }
  }
}
</script>
