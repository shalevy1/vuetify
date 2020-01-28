<template>
  <v-container
    class="pa-0"
    fluid
  >
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <v-col
        v-for="(layout, i) in layouts"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img
            :alt="layout.name"
            :src="genSrc(layout.name)"
            :aspect-ratio="16/9"
            width="100%"
          >
            <v-fade-transition>
              <v-overlay
                absolute
                opacity="0.7"
                class="text-center"
              >
                <h2
                  class="title mb-6"
                  v-text="layout.name"
                />
                <v-btn
                  :aria-label="`Link to layout for ${layout.name}`"
                  :href="`/${$route.params.lang}/examples/layouts/${kebabCase(layout.name)}`"
                  :title="`Link to layout for ${layout.name}`"
                  class="mx-2"
                  color="indigo"
                  depressed
                  fab
                  small
                  target="_blank"
                >
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
                <v-btn
                  :aria-label="`Link to layout ${layout.name}`"
                  :href="`https://github.com/vuetifyjs/vuetify/tree/${branch}/packages/docs/src${layout.href}.vue`"
                  :title="`Link to code for ${layout.name}`"
                  class="mx-2"
                  color="indigo"
                  depressed
                  fab
                  small
                  target="_blank"
                >
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import kebabCase from 'lodash/kebabCase'
  import { getBranch } from '@/util/helpers'

  export default {
    data: () => ({
      branch: null,
      layouts: [
        { name: 'Baseline', href: '/layouts/layouts/demos/baseline' },
        { name: 'Baseline Flipped', href: '/layouts/layouts/demos/baseline-flipped' },
        { name: 'Centered', href: '/layouts/layouts/demos/centered' },
        { name: 'Complex', href: '/layouts/layouts/demos/complex' },
        { name: 'Dark', href: '/layouts/layouts/demos/dark' },
        { name: 'Google Contacts', href: '/layouts/layouts/demos/google-contacts' },
        { name: 'Google Keep', href: '/layouts/layouts/demos/google-keep' },
        { name: 'Google Youtube', href: '/layouts/layouts/demos/google-youtube' },
        { name: 'Sandbox', href: '/layouts/layouts/demos/sandbox' },
      ],
    }),
    mounted () {
      this.branch = getBranch()
    },
    methods: {
      kebabCase,
      genSrc (name) {
        return `https://cdn.vuetifyjs.com/images/layouts/${name.toLowerCase().replace(' ', '-')}.png`
      },
    },
  }
</script>
