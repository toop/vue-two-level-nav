<template>
  <v-navigation-drawer app clipped fixed v-model="active">
    <v-list dense>
      <v-list-tile v-for="route of routes" :key="route.id" :to="route.path" exact>
        <v-list-tile-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ route.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
  export default {
    props: {
      isActive: {
        required: true,
      },
    },

    data () {
      return {
        routes: [
          { id: 0, icon: 'home', text: 'Home', path: '/' },
          { id: 1, icon: 'forward', text: 'Foo', path: '/foo' },
          { id: 2, icon: 'info', text: 'About', path: '/about' },
        ],
      }
    },

    computed: {
      active: {
        get: function () {
          return this.isActive
        },
        set: function (isActive) {
          this.$emit('onAutoToggle', isActive)
        }
      },
    },
  }
</script>
