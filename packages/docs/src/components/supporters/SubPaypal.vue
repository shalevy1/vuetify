<template>
  <v-row
    id="one-time-donation"
    class="mb-12"
    tag="section"
  >
    <v-col cols="12">
      <base-heading goto="one-time-donation">
        oneTime
      </base-heading>
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
      <base-markdown>oneTimeBlurb</base-markdown>
    </v-col>

    <v-col
      class="text-center"
      cols="12"
    >
      <a
        aria-label="Support Vuetify through Paypal"
        href="https://paypal.me/vuetify"
        rel="noopener"
        target="_blank"
        title="Support Vuetify through Paypal"
      >
        <v-img
          alt="Paypal Logo"
          class="d-inline-block"
          src="https://cdn.vuetifyjs.com/images/social/paypal.png"
          width="150"
        />
      </a>
    </v-col>
  </v-row>
</template>
