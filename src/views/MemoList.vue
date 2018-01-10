<template lang="pug">
  div(@click="postData") 测试
</template>
<script>
  export default {
    name: 'memo-list',
    methods: {
      async postData () {
        const {data} = await this.$http.get('/get-all-memo')
        console.info(data)
      }
    }
  }
</script>
<style>
</style>
