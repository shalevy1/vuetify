<template>
  <v-card
    aria-label="Support the Development of Vuetify"
    class="mb-12"
    href="https://github.com/users/johnleider/sponsorship"
    rel="noopener"
    target="_blank"
    elevation="16"
  >
    <v-card-text>
      <v-row>
        <v-col
          class="d-flex pl-1"
          :style="{ order: $vuetify.breakpoint.xs ? '2' : '1' }"
          cols="10"
        >
          <v-row
            align="center"
          >
            <v-col
              class="display-1 mr-6 support d-flex"
              cols="12"
              sm="6"
            >
              <v-icon
                x-large
                class="mr-3"
              >
                mdi-github-circle
              </v-icon>
              GITHUB
            </v-col>
            <v-col
              class="hidden-xs-only support-bar mr-6"
            />
            <v-col
              class="hidden-sm-and-up support-bar-horizontal mr-6"
            />
            <v-col
              class="display-1 support-caption"
              cols="12"
              sm="6"
            >
              Sponsor the project
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="align-center text-center d-flex"
          :style="{ order: $vuetify.breakpoint.xs ? '1' : '2' }"
          cols="2"
        >
          <v-row align="center">
            <v-col cols="12">
              <v-img
                class="logo"
                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                width="50px"
                alt="Vuetify Logo"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>
.support
  color: #052D49
  flex: 0 0 auto
  font-weight: 900
  letter-spacing: 6px !important

  .v-icon
    color: inherit

.support-bar
  background-color: #052D49
  height: 80px
  flex: 0 1 6px

.support-bar-horizontal
  border-bottom: 6px solid #052D49
  width: 100%
  flex-shrink: 1

.support-caption
  color: #052D49
</style>
