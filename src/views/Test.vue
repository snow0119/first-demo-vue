<template lang="pug">
  div(class = 'content')
    h1 我是标题
    span 来测试pug模板了~~~
    button(@click="postData") sendPost
</template>
<script>
  export default {
    name: 'test',
    methods: {
      postData () {
        this.$http({
          method: 'post',
          url: '/user',
          data: {
            name: 'snow',
            info: '12'
          }
        })
      }
    }
  }
</script>
<style lang="stylus">
  .content
    color white
    background-color grey
</style>
