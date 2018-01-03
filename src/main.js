import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'

Vue.use(Vuetify, {
  theme: {
    primary: '#ff9800'
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
