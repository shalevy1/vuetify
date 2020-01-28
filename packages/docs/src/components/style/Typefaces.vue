<template>
  <v-card
    class="pa-12 hidden-sm-and-down"
    flat
  >
    <v-row
      v-for="(type, i) in typefaces"
      :key="i"
      class="my-4"
      align="center"
      justify="space-between"
    >
      <v-col
        :class="type[1]"
        v-html="type[0]"
      />
      <v-col
        class="hidden-md-and-down text-right text-uppercase grey--text"
      >
        {{ type[2] }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      typefaces: [
        ['Quantum Mechanics', 'display-3', 'Regular'],
        ['6.626069x10<sup class="display-2 font-weight-light mt-6">-34</sup>', 'd-flex align-start display-4 font-weight-thin', 'Thin'],
        ['One hundred percent cotton bond', 'display-1 font-italic font-weight-bold', 'Bold italic'],
        ['Quasiparticles', 'display-4 font-weight-bold', 'Bold'],
        ['It became the non-relativistic limit of quantum field theory', 'title', 'Condensed'],
        ['PAPERCRAFT', 'display-4 font-weight-light font-italic', 'Light italic'],
        ['Probabilistic wave - particle wavefunction orbital path', 'title font-italic font-weight-medium', 'Medium italic'],
        ['ENTANGLED', 'display-4 font-weight-black', 'Black'],
        ['Cardstock 80lb ultra-bright orange', 'display-1 font-weight-medium', 'Medium'],
        ['STATIONERY', 'display-4 font-weight-thin', 'Thin'],
        ['POSITION, MOMENTUM & SPIN', 'display-2 font-weight-light', 'Condensed Light'],
      ],
    }),

  }
</script>
