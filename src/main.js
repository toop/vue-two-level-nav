import Vue from 'vue'
import Vuetify from 'vuetify'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#ff9800'
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
