import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  subroutes: [],
}

const getters = {
  subroutes: state => state.subroutes
}

const mutations = {
  setSubroutes (state, subroutes = []) {
    state.subroutes = subroutes
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
})
