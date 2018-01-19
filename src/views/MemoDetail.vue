<template lang="pug">
  div(class="container-detail")
    h2 备忘录详情
    div(class="btn-memo")
      span(class="btn", @click="$router.push(`/modify-memo/${$route.params.memoId}`)") 修改
      span(class="btn", @click="deleteMemo") 删除
    ul
      li
        span 模块名：
        div {{memoName}}
      li
        span 需求描述：
        div {{demand}}
      li
        span 已完成项:
        div(class="items")
          div(class="item", v-for="(item, index) in completed") {{item.detail}}
      li
        span 未完成项:
        div(class="items")
          div(class="item", v-for="(item, index) in undone") {{item.detail}}
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
    async created () {
      const $this = this
      await this.$http.get(`/get-memo-detail/${this.$route.params.memoId}`).then(({data}) => {
        $this.memoId = data.memoId
        $this.memoName = data.memoName
        $this.demand = data.demand
        $this.completed = data.completed
        $this.undone = data.undone
      })
    },
    methods: {
      async deleteMemo () {
        const result = (await this.$http.get(`/delete-memo/${this.memoId}`)).data

        alert(result.desc)
        if (result.code === '0') this.$router.push(`/`)
      }
    }
  }
</script>
<style lang="stylus">
  .container-detail
    ul
      padding 20px
      list-style none
      margin 0 200px 20px
      background-color rgba(255, 255, 255, 0.6)

      li
        position relative
        padding-bottom 10px

        &:first-child, &:nth-child(2)
          padding 5px

          span
            margin-top 0

          div
            font-size 14px
            text-align left
            color #697b6c

        div
          display inline-block
          width 462px

        span
          width 80px
          text-align left
          display inline-block
          margin-top 10px
          vertical-align top

  .btn-memo
    margin-left 60%
    margin-right 25%
    margin-bottom 20px

  .btn
    display inline-block
    margin-right 10px
    padding 5px 10px
    border-radius 30px
    background-color #fff

  .items, .item
    display inline-block

  .items
    text-align left
    margin-top 10px

  .item
    width 450px
    padding 5px
    font-size 12px
    text-align left
    color #716b6b

    &:nth-of-type(odd)
      background-color #c3e6e8

    &:nth-of-type(even)
      background-color #d8e8cb
</style>
