<template lang="pug">
  div(class="container")
    h2 添加备忘录
    ul
      li
        span 模块名：
        input(v-model="memoName", placeholder="请输入模块名")
      li
        span 需求描述：
        input(v-model="demand", placeholder="请输入需求的相关描述")
      li
        span 需完成项:
        div(class="remark")
          textarea(v-model="currentItem", placeholder="请输入需要完成的项")
        button(class="add-item", @click="addItem") 添加
        template(v-for="(item, index) in items")
          input(type="checkbox", @click="itemFinished(item.detail)", :checked="item.selected")
          span {{item.detail}}
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
        const result = (await this.$http.post('save-memo', {
          memoName, demand, items
        })).data

        alert(result.desc)
        if (result.code === '0') this.$router.push(`/memo-detail/${result.data}`)
      }
    }
  }
</script>
<style>
  .container ul {
    padding: 20px;
    list-style: none;
    margin: 0 200px 20px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .container li input {
    position: relative;
    width: 50%;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid #f1f1f1;
  }

  .container li span {
    width: 80px;
    text-align: left;
    display: inline-block;
    vertical-align: middle;
  }

  .container li:nth-child(3) {
    position: relative;
  }

  .container li:nth-child(3) span {
    margin-top: 20px;
    vertical-align: top;
  }

  .container .remark {
    display: inline-block;
    position: relative;
    height: 50px;
    width: 50%;
    margin-top: 10px;
    padding: 10px 18px;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
  }

  .container .remark textarea {
    border: 0;
    outline: 0;
    width: 100%;
    resize: none;
    height: 100%;
  }

  .container .add-item, .container .save-memo {
    border-radius: 5px;
    background-color: white;
    border: 1px solid #f1f1f1;
  }

  .container .add-item {
    position: absolute;
    top: 20px;
    width: 50px;
    margin-left: 10px;
  }

  .container .save-memo {
    width: 100px;
    font-size: 16px;
    margin-top: 20px;
  }
</style>
