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
    width 92em
    margin 0 auto
    max-width 95%

    ul
      padding 2em
      list-style none
      background-color rgba(255, 255, 255, 0.6)

      li
        text-align left
        position relative
        padding-bottom 1em

        &:first-child, &:nth-child(2)
          span
            margin-top 0

          div
            color #697b6c
            text-align left
            display inline-block

        span
          width 8em
          text-align left
          display inline-block
          margin-top 1em
          vertical-align top

  .btn-memo
    margin-bottom 2em

  .btn
    display inline-block
    margin-right 1em
    padding 5px 1em
    border-radius 30px
    background-color #fff

  .items
    text-align left
    margin-top 1em
    display inline-block

  .item
    padding 5px
    text-align left
    color #716b6b

    &:nth-of-type(odd)
      background-color #c3e6e8

    &:nth-of-type(even)
      background-color #d8e8cb
</style>
