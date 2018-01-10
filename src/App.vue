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

<style>
  body {
    margin: 0;
    padding: 50px 0;
    background-size: cover;
    background: url("./assets/background.jpg") no-repeat;
  }

  #app {
    color: #2c3e50;
    text-align: center;
  }
</style>
