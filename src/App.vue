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
  import Drawer from './components/Drawer.vue'
  import Toolbar from './components/Toolbar.vue'

  export default {
    name: 'app',
    components: { Drawer, Toolbar },

    data () {
      return {
        isDrawerActive: undefined,
        subroutes: [],
      }
    },

    methods: {
      onDrawerToggle (isActive) {
        this.isDrawerActive = isActive
      },
      onSubmenuItemClick ({ path }) {
        this.$router.push(path)
      },
    },

    mounted () {
      // TODO: init this subroutes from Foo when navigated, otherwise load empty subroutes array
      // Consider to use vuex
      this.subroutes = [
        { id: 0, text: 'Bar', path: '/foo/bar' },
        { id: 1, text: 'Baz', path: '/foo/baz' },
      ]
    },
  }
</script>
