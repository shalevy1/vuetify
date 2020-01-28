<template>
  <v-container
    class="pa-0"
    fluid
  >
    <supporters-sub-github />

    <supporters-sub-open-collective />

    <supporters-sub-tidelift />

    <supporters-sub-paypal />

    <v-col cols="12">
      <base-heading>sponsors</base-heading>
    </v-col>

    <v-col
      class="my-2"
      cols="12"
      tag="v-divider"
    />

    <supporters-sponsors />
  </v-container>
</template>

<script>
  export default {
    inheritAttrs: false,
  }
</script>
