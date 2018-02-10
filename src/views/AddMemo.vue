<template lang="pug">
  div(class="container-add")
    h2 添加备忘录
    ul
      li
        span 模块名：
        input(class="memoName", v-model="memoName", placeholder="请输入模块名")
      li
        span 需求描述：
        input(class="demand", v-model="demand", placeholder="请输入需求的相关描述")
      li
        span 需完成项:
        div(class="remark")
          textarea(v-model="currentItem", placeholder="请输入需要完成的项")
        button(class="add-item", @click="addItem") 添加
        div(class="items", v-if="items.length > 0")
          div(class="item", v-for="(item, index) in items")
            input(type="checkbox", @click="itemFinished(item.detail)", :checked="item.selected")
            div {{item.detail}}
      button(class="save-memo", @click="saveMemo") 保存
</template>
<script>
  export default {
    name: 'add-memo',
    data () {
      return {
        items: [],
        memoName: '',
        demand: '',
        currentItem: ''
      }
    },
    methods: {
      addItem () {
        this.items.push({selected: false, detail: this.currentItem})
        this.currentItem = ''
      },
      itemFinished (itemDetail) {
        this.items.forEach(item => {
          if (item.detail === itemDetail) item.selected = true
        })
      },
      async saveMemo () {
        const {memoName, demand, items} = this
        if (!memoName || !demand || !items) return alert('请将相关内容填写完整')
        const result = (await this.$http.post('/save-memo', {
          memoName, demand, items
        })).data

        alert(result.desc)
        if (result.code === '0') this.$router.push(`/memo-detail/${result.data}`)
      }
    }
  }
</script>
<style lang="stylus">
  .container-add
    width 92em
    margin 0 auto
    max-width 95%

    ul
      padding 2em
      list-style none
      background-color rgba(255, 255, 255, 0.6)

      li
        &:nth-child(3)
          position relative

          span
            margin-top 2em
            vertical-align top

        .memoName, .demand
          position relative
          width 50%
          margin-top 1em
          padding 1em 2em
          border-radius 20px
          display inline-block
          border 1px solid #f1f1f1

        span
          width 8em
          text-align left
          display inline-block
          vertical-align middle

    .remark
      display inline-block
      position relative
      height 50px
      width 50%
      margin-top 1em
      padding 1em 18px
      border-radius 20px
      background-color #fff
      border 1px solid #f1f1f1

      textarea
        border 0
        outline 0
        width 100%
        resize none
        height 100%

  .add-item, .save-memo
    border-radius 5px
    background-color white
    border 1px solid #f1f1f1

  .items
    margin-top 1em

  .add-item
    position absolute
    top 2em
    width 5em
    margin-left 1em

  .item
    text-align left
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
      text-align left
      margin-left 2em

  .save-memo
    width 10em
    margin-top 2em
</style>
