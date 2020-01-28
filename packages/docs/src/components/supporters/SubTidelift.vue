<template>
  <v-row
    id="tidelift"
    class="mb-12"
    tag="section"
  >
    <v-col cols="12">
      <base-heading>tidelift</base-heading>
    </v-col>

    <v-col
      class="my-2"
      cols="12"
      tag="v-divider"
    />

    <v-col
      class="mb-4"
      cols="12"
    >
      <base-markdown>tideliftBlurb</base-markdown>
    </v-col>

    <v-col
      class="text-center"
      cols="12"
    >
      <core-tidelift-btn />
    </v-col>
  </v-row>
</template>
