<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  * {
    box-sizing border-box
  }

  body {
    margin 0
    padding 0
    background-color #f1f7e6
  }

  #app {
    color #2c3e50
    text-align center
  }
</style>
