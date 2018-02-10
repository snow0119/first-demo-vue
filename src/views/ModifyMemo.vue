<template lang="pug">
  div(class="container-modify")
    h2 修改备忘录
    ul
      li
        span 模块名：
        input(class="memoName", v-model="memoName", placeholder="请输入模块名", readonly)
      li
        span 需求描述：
        input(class="demand", v-model="demand", placeholder="请输入需求的相关描述", readonly)
      li
        span 需完成项:
        div(class="items")
          div(class="item", v-for="(item, index) in items")
            input(type="checkbox", @click="itemFinished(item.detail)", :checked="item.selected")
            div {{item.detail}}
      button(class="update-memo", @click="updateMemo") 修改
</template>
<script>
  export default {
    name: 'update-memo',
    data () {
      return {
        memoId: this.$route.params.memoId,
        memoName: '',
        demand: '',
        items: []
      }
    },
    created () {
      const $this = this
      this.$http.get(`/init-memo-detail/${this.$route.params.memoId}`).then(({data}) => {
        $this.memoName = data.memoName
        $this.demand = data.demand
        $this.items = data.items
      })
    },
    methods: {
      itemFinished (itemDetail) {
        this.items.forEach(item => {
          if (item.detail === itemDetail) item.selected = true
        })
      },
      async updateMemo () {
        const {memoName, demand, items, memoId} = this
        if (!memoName || !demand || !items) return alert('请将相关内容填写完整')
        const result = (await this.$http.post('/update-memo', {
          memoName, demand, items
        })).data

        alert(result.desc)
        if (result.code === '0') this.$router.push(`/memo-detail/${memoId}`)
      }
    }
  }
</script>
<style lang="stylus">
  .container-modify
    width 92em
    margin 0 auto
    max-width 95%

    ul
      padding 2em
      list-style none
      background-color rgba(255, 255, 255, 0.6)

      li
        text-align left

        .memoName, .demand
          position relative
          width 80%
          margin-top 1em
          padding 1em 2em
          border-radius 20px
          display inline-block
          border 1px solid #f1f1f1

        span
          width 8em
          display inline-block
          vertical-align middle

        &:nth-child(3)
          position relative

          span
            margin-top 1em
            vertical-align top

  .items
    margin-top 1em
    display inline-block

  .item
    position relative
    padding 0 6px
    background-color white

    &:nth-of-type(odd)
      background-color #c3e6e8

    &:nth-of-type(even)
      background-color #d8e8cb

    input
      position absolute
      top 50%
      transform translate3d(0, -50%, 0)

    div
      display inline-block
      padding 5px
      font-size 12px
      text-align left
      margin-left 2em

  .update-memo
    width 10em
    margin-top 2em
    border-radius 30px
    background-color #fff
</style>
