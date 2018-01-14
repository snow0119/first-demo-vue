<template lang="pug">
  div(class="container-detail")
    h2 备忘录详情
    div(class="update-memo", @click="$router.push(`/modify-memo/${$route.params.memoId}`)") 修改
    ul
      li 模块名：{{memoName}}
      li 需求描述：{{demand}}
      li
        span 已完成项:
        template(v-for="(item, index) in completed")
          span {{item.detail}}
      li
        span 未完成项:
        template(v-for="(item, index) in undone")
          span {{item.detail}}
</template>
<script>
  export default {
    name: 'memo-detail',
    data () {
      return {
        memoId: '',
        memoName: '',
        demand: '',
        completed: [],
        undone: []
      }
    },
    created () {
      const $this = this
      this.$http.get(`/get-memo-detail/${this.$route.params.memoId}`).then(({data}) => {
        $this.memoId = data.memoId
        $this.memoName = data.memoName
        $this.demand = data.demand
        $this.completed = data.completed
        $this.undone = data.undone
      })
    }
  }
</script>
<style>
  .container-detail ul {
    padding: 20px;
    list-style: none;
    margin: 0 200px 20px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .container-detail li:nth-child(3) {
    position: relative;
  }

  .container-detail li:nth-child(3) span {
    margin-top: 20px;
    vertical-align: top;
  }
</style>
