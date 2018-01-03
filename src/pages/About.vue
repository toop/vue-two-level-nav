<template>
  <v-container fluid>
    <h2>About page</h2>
    <p>Hi there!</p>
  </v-container>
</template>


<script>
  export default {
    mounted () {
      this.$store.commit('setSubroutes', [])
    },
  }
</script>
