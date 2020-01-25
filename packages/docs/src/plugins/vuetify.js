import Vue from 'vue'
import Vuetify from 'vuetify'
import goTo from 'vuetify/lib/services/goto'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1867C0',
        secondary: '#5CBBF6',
        tertiary: '#E57373',
        accent: '#005CAF',
      },
    },
  },
})

goTo.framework = vuetify.framework

export default vuetify
