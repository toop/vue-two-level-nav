<template>
  <v-container fluid>
    <h2>Home page</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ducimus ratione vero quasi veritatis ipsam.</p>
  </v-container>
</template>


<script>
  export default {
    mounted () {
      this.$store.commit('setSubroutes', [])
    },
  }
</script>
