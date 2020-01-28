<template>
  <v-container
    class="pa-0"
    fluid
  >
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        class="d-flex child-flex"
        cols="12"
        sm="6"
        md="4"
      >
        <categories-item :value="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'
  import kebabCase from 'lodash/kebabCase'

  export default {
    props: {
      value: {
        type: Object,
        default: () => ({}),
      },
    },

    computed: {
      ...mapState('route', ['params']),
      items () {
        return this.value[this.params.section].map(item => ({
          title: this.$t(`Components.Categories.${item}`),
          text: this.$t(`Components.Categories.${item}Text`),
          to: `/${this.params.lang}/components/${kebabCase(item)}`,
        }))
      },
    },
  }
</script>
