<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>

    <template v-if="subroutes.length">
      <v-spacer></v-spacer>

      <v-menu class="hidden-md-and-up" bottom left>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="route of subroutes" :key="route.id" :to="route.path">
            <v-list-tile-title>{{ route.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="route of subroutes" :key="route.id" :to="route.path">{{ route.text }}</v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>


<script>
  export default {
    props: {
      isDrawerActive: {
        required: true,
      },
      subroutes: {
        required: true,
        type: Array,
      },
    },

    methods: {
      toggleDrawer () {
        this.$emit('onDrawerToggle', !this.isDrawerActive)
      }
    },
  }
</script>
