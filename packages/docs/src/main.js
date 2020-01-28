// Polyfills for IE Support
import 'babel-polyfill'
import 'event-source-polyfill'

// Packages
import Vue from 'vue'

// Bootstrap
// need to figure out why this loads with errors
import '@/components'
import i18n from '@/i18n/index'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'

// Application
import App from './App.vue'

Vue.config.performance = process.env.NODE_ENV === 'development'

store.state.app.currentVersion = vuetify.version
// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
