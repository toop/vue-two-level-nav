<template>
  <v-app dark>
    <drawer :is-active="isDrawerActive" @onAutoToggle="onDrawerToggle"></drawer>
    <toolbar :is-drawer-active="isDrawerActive" @onDrawerToggle="onDrawerToggle" :subroutes="subroutes"></toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script>
  import { mapGetters } from 'vuex'

  import Drawer from './components/Drawer.vue'
  import Toolbar from './components/Toolbar.vue'

  export default {
    name: 'app',
    components: { Drawer, Toolbar },

    data () {
      return {
        isDrawerActive: undefined,
      }
    },

    computed: {
      ...mapGetters(['subroutes']),
    },

    methods: {
      onDrawerToggle (isActive) {
        this.isDrawerActive = isActive
      },
    },
  }
</script>
