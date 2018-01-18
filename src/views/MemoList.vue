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
    font-size 16px

    ul
      padding 0
      margin 0 200px
      list-style none
      overflow scroll
      max-height 478px

      li
        padding 10px
        text-align left
        border-radius 15px
        margin-bottom 10px
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
          margin-right 20px
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
    margin-bottom 20px
    border-radius 30px
    background-color #fff

  .empty
    margin 0 200px
    font-size 14px
    padding 50px 10px
    border-radius 15px
    background-color rgba(255, 255, 255, 0.6)

  button
    display block
    color #68999d
    margin 20px auto
    background-color #fff
</style>
