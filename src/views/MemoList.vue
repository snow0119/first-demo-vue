<template lang="pug">
  div(class="container-list")
    h2 备忘录列表
    div(class="add-memo", @click="$router.push('/add-memo')") 添加
    ul(v-if="memoList.length > 0")
      li(v-for="(memo, index) in memoList", @click="$router.push(`/memo-detail/${memo.memoId}`)")
        div {{memo.memoName}}
        span {{memo.createTime}}
        div
          p
            span 需求描述:
            | {{memo.demand}}
    div(v-else, class="empty") 暂无备忘录, 可点击右上角进行添加。
</template>
<script>
  export default {
    name: 'memo-list',
    data () {
      return {
        memoList: []
      }
    },
    created () {
      const $this = this
      this.$http.get('/get-all-memo').then(({data: {memoList}}) => {
        $this.memoList = memoList
      })
    }
  }
</script>
<style lang="stylus">
  .container-list
    width 92em
    margin 0 auto
    max-width 95%

    ul
      padding 0
      list-style none
      overflow scroll
      max-height 478px

      li
        padding 1em
        text-align left
        border-radius 15px
        margin-bottom 1em
        background-color rgba(255, 255, 255, 0.6)

        div
          &:first-child
            text-align center

          &:nth-child(2)
            overflow hidden

        span
          float right
          color #68999d
          font-size 12px
          margin-right 2em
          padding-left 1rem

        p
          color #697b6c
          font-size 14px
          padding-left 1rem

          span
            float none
            color #2c3e50
            font-size 14px
            margin-right 5px
            padding-left 0

  .add-memo
    margin-left 60%
    margin-right 25%
    padding 5px 10px
    margin-bottom 2em
    border-radius 3em
    background-color #fff

  .empty
    margin 0 20em
    font-size 14px
    padding 5em 1em
    border-radius 15px
    background-color rgba(255, 255, 255, 0.6)

  button
    display block
    color #68999d
    margin 2em auto
    background-color #fff
</style>
