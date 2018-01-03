<template>
  <router-view></router-view>
</template>


<script>
  export default {
    mounted () {
      this.$store.commit('setSubroutes', [
        { id: 0, text: 'Bar', path: '/foo/bar' },
        { id: 1, text: 'Baz', path: '/foo/baz' },
      ])
    }
  }
</script>
